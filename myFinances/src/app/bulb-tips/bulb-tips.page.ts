import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bulb-tips',
  templateUrl: './bulb-tips.page.html',
  styleUrls: ['./bulb-tips.page.scss'],
})
export class BulbTipsPage implements OnInit {


  constructor(private router:Router) { }


  ngOnInit() {
  }


  home() {
    this.router.navigateByUrl('/tabs/home_loggeado');
  }


  showArticle1() {
    const art1 = document.getElementById("article1");
    if(art1 != null && art1.style.display == 'none'){
      art1.style.display = 'block';
    }
    else if(art1 != null && art1.style.display == 'block'){
      art1.style.display = 'none';
    }
  }


  showArticle2() {
    const art2 = document.getElementById("article2");
    if(art2 != null && art2.style.display == 'none'){
      art2.style.display = 'block';
    }
    else if(art2 != null && art2.style.display == 'block'){
      art2.style.display = 'none';
    }
  }


  showArticle3() {
    const art3 = document.getElementById("article3");
    if(art3 != null && art3.style.display == 'none'){
      art3.style.display = 'block';
    }
    else if(art3 != null && art3.style.display == 'block'){
      art3.style.display = 'none';
    }
  }


  showArticle4() {
    const art4 = document.getElementById("article4");
    if(art4 != null && art4.style.display == 'none'){
      art4.style.display = 'block';
    }
    else if(art4 != null && art4.style.display == 'block'){
      art4.style.display = 'none';
    }
  }


  showArticle5() {
    const art5 = document.getElementById("article5");
    if(art5 != null && art5.style.display == 'none'){
      art5.style.display = 'block';
    }
    else if(art5 != null && art5.style.display == 'block'){
      art5.style.display = 'none';
    }
  }
}
