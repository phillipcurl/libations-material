export class EventFeedback{

    constructor(
      public id: string,
      public feedback: string,
      public created: Date,
      public creatorId: number,
      public updated: Date,
      public updaterId: number,
      public isActive: boolean,
      public isLocked: boolean
    ){}
}
