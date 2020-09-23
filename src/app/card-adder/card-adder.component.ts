import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
    const card = {title: this.cardForm.get('title').value,
      description: this.cardForm.get('description').value,
      assignee: this.cardForm.get('assignee').value, state: 'TO DO'};
    this.cardProviderService.addCard(card).subscribe();
  }

  showAddModal(content) {
    this.ngbModal.open(content).result.then(() => {
      this.addCard();
    }).catch(() => console.log('modal dismissed'));
  }
}
