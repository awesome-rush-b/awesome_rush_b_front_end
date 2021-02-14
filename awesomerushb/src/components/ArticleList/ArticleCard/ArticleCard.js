import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
  },
});

class ArticleCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: props.title,
            content: props.content,
            createDate: props.createDate,
            modifyDate: props.modifyDate,
            hashTag: props.hashTag
        };
    }
    

    render(){
        return (
            <Card>
              <CardActionArea>
                {/* <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="80" 
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                /> */}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {this.state.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {this.state.content}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {this.state.createDate}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {this.state.modifyDate}
                    </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>

          );
    }
}

export default ArticleCard;