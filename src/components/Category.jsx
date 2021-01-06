import React from "react"
import PropTypes from "prop-types"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import { Grid } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import Question from "./Question"

Category.propTypes = {
  categoryData: PropTypes.shape({
    title: PropTypes.string,
    questions: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        answer: PropTypes.shape({
          content: PropTypes.arrayOf(
            PropTypes.shape({
              content: PropTypes.arrayOf(
                PropTypes.shape({
                  value: PropTypes.string,
                })
              ),
            })
          ),
        }),
      })
    ),
  }),
  onClick: PropTypes.func,
}

const useStyles = makeStyles({
  categoryContainer: {
    marginBottom: "30px",
  },
  gradientBackground: {
    background:
      "linear-gradient(to right top, #eeaf61, #f2a85f, #f5a05f, #f89860, #fb9062)",
    padding: "2px",
    borderRadius: "3px",
  },
  paddedBox: {
    backgroundColor: "#121B23",
    borderRadius: "3px",
  },
  font: {
    fontFamily: "Titillium Web",
    textAlign: "center",
    color: "#FFFFFF",
  },
})

export default function Category(props) {
  const { categoryData, onClick } = props
  const classes = useStyles()

  function renderQuestions() {
    let questions = []

    for (let question of categoryData.questions) {
      questions.push(
        <Question
          questionData={question}
          key={question.title.replace(/\s+/g, "-").toLowerCase()}
          onClick={onClick}
        />
      )
    }
    return questions
  }

  return (
    <Grid
      item
      container
      className={classes.categoryContainer}
      id={categoryData.title.replace(/\s+/g, "-").toLowerCase()}
    >
      <Grid item xs={false} sm={1} />

      <Grid
        item
        container
        xs={12}
        sm={10}
        direction="column"
        className={classes.gradientBackground}
      >
        <Box p={3} className={classes.paddedBox}>
          <Box mb={2}>
            <Grid item>
              <Typography className={classes.font} variant="h4">
                {categoryData.title}
              </Typography>
            </Grid>
          </Box>
          <Grid item>{renderQuestions()}</Grid>
        </Box>
      </Grid>

      <Grid item xs={false} sm={1} />
    </Grid>
  )
}
