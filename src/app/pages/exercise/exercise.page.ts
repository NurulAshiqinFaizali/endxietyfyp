import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.page.html',
  styleUrls: ['./exercise.page.scss'],
})
export class ExercisePage {

  constructor(private animationCtrl: AnimationController) { }

  breathe(){
    const animation: Animation = this.animationCtrl.create()
    .addElement(document.querySelector('.square'))
    .duration(6000)
    .iterations(Infinity)
    .beforeStyles({
      opacity: 1.5
    })
    .afterStyles({
      background: 'rgba(248, 7, 67, 0.5)'
    })
    .afterClearStyles(['opacity'])
    .keyframes([
      { offset: 0, transform: 'scale(1)' },
      { offset: 0.5, transform: 'scale(2.5)' },
      { offset: 1, transform: 'scale(1)' }
    ])
    document.querySelector('#play').addEventListener('click', () => {
      animation.play();
    });
    
  
    
    document.querySelector('#stop').addEventListener('click', () => {
      animation.stop();
    });
  }
  

}
