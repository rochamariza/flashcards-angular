import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards {
  flashcards = [
    { question: 'What is the capital of France?', answer: 'Paris' },
    { question: 'How many continents are there on Earth?', answer: '7' },
    { question: 'What is the largest planet in our solar system?', answer: 'Jupiter' },
    { question: 'How many sides does a hexagon have?', answer: '6' },
    { question: 'What is the chemical symbol for water?', answer: 'H₂O' },
    { question: 'Who painted the Mona Lisa?', answer: 'Leonardo da Vinci' },
    { question: 'What is the fastest land animal?', answer: 'Cheetah' },
    { question: 'How many days are in a leap year?', answer: '366' },
    { question: 'What is the smallest country in the world?', answer: 'Vatican City' },
    { question: 'Which planet is known as the Red Planet?', answer: 'Mars' },
    { question: 'How many colors are in a rainbow?', answer: '7' },
    { question: 'What is the longest river in the world?', answer: 'The Nile' },
    { question: 'Who wrote Romeo and Juliet?', answer: 'William Shakespeare' },
    { question: 'What is the hardest natural substance on Earth?', answer: 'Diamond' },
    { question: 'How many bones are in the adult human body?', answer: '206' },
    { question: 'What gas do plants absorb from the atmosphere?', answer: 'Carbon dioxide (CO₂)' },
    { question: 'What is the capital of Japan?', answer: 'Tokyo' },
    { question: 'How many strings does a standard guitar have?', answer: '6' },
    { question: 'What ocean is the largest in the world?', answer: 'The Pacific Ocean' },
    { question: 'What language is spoken in Brazil?', answer: 'Portuguese' },
  ];

  current = 0
  get card(){
    return this.flashcards[this.current]
  }next(){
    if(this.current >= this.flashcards.length - 1){
      this.current = this.flashcards.length - 1
    }else{
      this.current = this.current + 1;
    }
  }prev(){
    if(this.current === 0){
      this.current = 0
    }else{
      this.current = this.current - 1;
    }
  }
  answer = signal(false)
  get currentPercentage(){
    return ((this.current + 1) * 100) / this.flashcards.length;
  }

  protected readonly innerWidth = innerWidth;
}
