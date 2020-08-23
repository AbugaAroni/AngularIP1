export class Quotes {
  showDescription: boolean;
  upvote: number;
  downvote: number;

  constructor(public id: number,public name: string,public description: string, public author: string,
    public submitter: string){
    this.showDescription=false;
    this.upvote=0;
    this.downvote=0;
  }

}
