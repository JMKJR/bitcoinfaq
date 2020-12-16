import React from "react"
import PropTypes from "prop-types"
import Typography from "@material-ui/core/Typography"
import Question from "./Question"
import { Grid } from "@material-ui/core"
import Box from "@material-ui/core/Box"

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
}

export default function Category(props) {
  const { categoryData } = props

  function renderQuestions() {
    let questions = []

    for (let question of categoryData.questions) {
      questions.push(
        <Question
          questionData={question}
          key={question.title.replace(/\s+/g, "-").toLowerCase()}
        />
      )
    }
    return questions
  }

  return (
    <Grid
      item
      container
      style={{ marginBottom: "30px" }}
      id={categoryData.title.replace(/\s+/g, "-").toLowerCase()}
    >
      <Grid item xs={false} sm={1} />

      <Grid
        item
        container
        xs={12}
        sm={10}
        direction="column"
        style={{
          background:
            "linear-gradient(to right top, #eeaf61, #f2a85f, #f5a05f, #f89860, #fb9062)",
          padding: "2px",
          borderRadius: "3px",
        }}
      >
        <Box
          p={3}
          style={{
            backgroundColor: "#121B23",
            borderRadius: "3px",
          }}
        >
          <Box mb={2}>
            <Grid item>
              <Typography
                style={{
                  fontFamily: "Titillium Web",
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
                variant="h4"
              >
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
