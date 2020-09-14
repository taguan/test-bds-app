export class Card {
  public title: string;
  public description: string;
  public assignee: string;
  public state: string;


  constructor(title: string, description: string, assignee: string, state: string) {
    this.title = title;
    this.description = description;
    this.assignee = assignee;
    this.state = state;
  }
}
