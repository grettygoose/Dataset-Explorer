
export class Dataset {

  isSelected = false;
  email: string;
  description: string;
  isHuman: boolean;
  isPhi: boolean;
  isPublic: boolean;
  name: string;
  reviewType: string;
  status: string;
  site: string;

  static parse(vo: any): Dataset {
    const ds = new Dataset();
    ds.site = vo.content.site;
    ds.isSelected = false;
    ds.name = vo.content.name;
    ds.description = vo.content.description;
    ds.email = vo.email;
    ds.isHuman = vo.content.isHuman;
    ds.isPhi = vo.content.isPhi;
    ds.isPublic = vo.content.isPublic;
    ds.reviewType = vo.content.reviewNumber;
    ds.status = vo.content.status;
    return ds;
  }
}



