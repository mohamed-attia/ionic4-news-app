import { Component, OnInit } from '@angular/core';

import { NewsService } from './../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  news: any;
  constructor(private newsService: NewsService, private router:Router) { }

  ngOnInit() {
    this.getNews();
  }
  private getNews(){
    this.newsService.getData('everything?q=apple&from=2020-06-30&to=2020-06-30&sortBy=popularity&').subscribe(res => {
      this.news = res;
    });
  }
  public newsDetails(article){
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-details']);
  }

}
