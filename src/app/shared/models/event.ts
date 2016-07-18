// @Author: Phillip Curl <PC>
// @Date:   2016-05-13T21:21:49-04:00
// @Email:  phillipcurl@gmail.com
// @Project: Libations-Portal
// @Last modified by:   PC
// @Last modified time: 2016-05-13T21:26:21-04:00

export class Event {
  constructor(
    public id: string,
    public date: Date,
    public name: string,
    public notes: string,
    public compensationRate: number,
    public created: Date,
    public creatorId: number,
    public isActive: Boolean,
    public isLocked: Boolean,
    public updated: Date,
    public updaterId: number
  ) {}
}