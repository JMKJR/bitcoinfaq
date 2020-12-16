import React from "react"
import PropTypes from "prop-types"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styles from "./Question.module.css"

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

export default function Question(props) {
  const { questionData } = props

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        style={{
          borderRadius: "3px",
          backgroundColor: "white",
        }}
      >
        <Typography style={{ fontSize: "16px" }}>
          {questionData.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails style={{ backgroundColor: "#FAFBF5" }}>
        <div className={styles.answer}>
          {questionData.childContentfulQuestionAnswerRichTextNode.json.content.map(
            (document, i) => (
              <React.Fragment key={`${document.value}${i}`}>
                {documentToReactComponents(document)}
              </React.Fragment>
            )
          )}
        </div>
      </AccordionDetails>
    </Accordion>
  )
}
