import { NewsService } from './../news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  articles = [];
  constructor(private NewsService : NewsService) { }

  ngOnInit() {
    this.articles = this.NewsService.getArticles();
  }

}
