import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Card} from '../card';
import {CardProviderService} from '../card-provider.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card-adder',
  templateUrl: './card-adder.component.html',
  styleUrls: ['./card-adder.component.css']
})
export class CardAdderComponent implements OnInit {

  cardForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
      assignee: new FormControl('', Validators.required)
    });

  constructor(private cardProviderService: CardProviderService, private ngbModal: NgbModal) { }

  ngOnInit(): void {
  }


  addCard() {
    const card = new Card(this.cardForm.get('title').value, this.cardForm.get('description').value,
      this.cardForm.get('assignee').value, 'TO DO');
    this.cardProviderService.addCard(card);
  }

  showAddModal(content) {
    this.ngbModal.open(content).result.then(() => {
      this.addCard();
    }).catch(() => console.log('modal dismissed'));
  }
}
