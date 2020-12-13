import React from "react"
import PropTypes from "prop-types"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { makeStyles } from "@material-ui/core/styles"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

Question.propTypes = {
  questionData: PropTypes.shape({
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
  }),
}

const useStyles = makeStyles(theme => ({
  accordianQuestionColor: {
    backgroundColor: "white",
  },
  accordianAnswerColor: {
    backgroundColor: "#FAFBF5",
  },
  textColor: { color: "#3B3B3B" },
}))

export default function Question(props) {
  const classes = useStyles()
  const { questionData } = props

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className={classes.accordianQuestionColor}
        style={{ borderRadius: "3px" }}
      >
        <Typography className={classes.textColor}>
          {questionData.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.accordianAnswerColor}>
        <Typography align="left">
          {questionData.childContentfulQuestionAnswerRichTextNode.json.content.map(
            document => documentToReactComponents(document)
          )}
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}
