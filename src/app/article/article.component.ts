import { NewsService } from './../news.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article ;
  constructor(private router: Router, private routeState: ActivatedRoute, private NewsService: NewsService) { }

  ngOnInit() {
    this.routeState.paramMap.subscribe((params) => {
      const articleId = +params.get('articleId');
      const article = this.NewsService.getArticle(articleId);
      this.article = article;

      if(!article) {
        this.router.navigate(["error-page"]);
      }
    })
  }

}
