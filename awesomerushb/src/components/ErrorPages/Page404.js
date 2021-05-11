import React from "react";
import FireplaceSharpIcon from "@material-ui/icons/FireplaceSharp";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import TweenOne from "rc-tween-one";
import "./Page404.css";

const useStyles = makeStyles({
  icon404Burned: {
    fontSize: "10em",
  },
});

export default function Page404(props) {
  // 路径动画配置

  const p0 = "M0,100 L25,100 C34,20 40,0 100,0";
  const p1 =
    "M0,100 C5,120 25,130 25,100 C30,60 40,75 58,90 C69,98.5 83,99.5 100,100";
  const ease0 = TweenOne.easing.path(p0);
  const ease1 = TweenOne.easing.path(p1);
  const iconAnimation = [
    {
      repeatDelay: 500,
      y: -70,
      repeat: -1,
      yoyo: true,
      ease: ease0,
      duration: 1000,
    },
    {
      repeatDelay: 500,
      appearTo: 0,
      scaleX: 0,
      scaleY: 2,
      repeat: -1,
      yoyo: true,
      ease: ease1,
      duration: 1000,
    },
  ];

  // 404 问题信息
  const errorMessage = props.match.params.message;

  // 404icon css style
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className="combined-wrapper">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div className="combined">
              <TweenOne
                animation={iconAnimation}
                style={{
                  position: "absolute",
                  transformOrigin: "center bottom",
                }}
              >
                <FireplaceSharpIcon className={classes.icon404Burned} />
              </TweenOne>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <Typography>
                <h1 style={{fontSize:'5em'}}>{errorMessage}</h1>
                <h2></h2>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
