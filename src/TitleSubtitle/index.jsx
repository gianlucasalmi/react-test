import { Typography } from "../Typography";

//funzione 
export const TitleSubtitle = ({title, subTitle, showSubTitle}) => {
  const subTitleCheck = subTitle.length > 10 ? subTitle.substring(0, 10) + "..." : subTitle;

 return (
    <div>
    <Typography style={{ color: "black" }}>{title}</Typography>
      {showSubTitle && ( <Typography color="green"> {subTitleCheck} </Typography>
     )}
    </div>
    );
};