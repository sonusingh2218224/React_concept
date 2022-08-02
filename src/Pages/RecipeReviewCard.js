import * as React  from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { CartContext } from "../App";



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({ item }) {

  const { cart, setCart } = React.useContext(CartContext);
  const [expanded, setExpanded] = React.useState(false);
  // console.log(item, "===============");
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleCart = (product) => {
    const newCartItems = { ...cart };
    newCartItems.items = [...cart.items, { ...product, qty: 1 }];
    //set ke samay stringify
    localStorage.setItem("newCartItems", JSON.stringify(newCartItems));
    setCart(newCartItems);
  };

  return (
    <div className="col-md-3">
      <Card>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          subheader={item?.title}
        />
        <CardMedia
          component="img"
          height="194"
          image={item?.image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {item?.id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price:
            {item?.price}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>

          <IconButton onClick={()=>handleCart(item)}>
            <AddShoppingCartIcon />
          </IconButton>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{item?.category}</Typography>
            <Typography paragraph>{item?.description}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
