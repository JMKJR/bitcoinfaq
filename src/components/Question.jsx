import React from "react"
import PropTypes from "prop-types"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styles from "./Question.module.css"
import { useMediaQuery } from "react-responsive"
import { makeStyles } from "@material-ui/core/styles"

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

  const isMobile = useMediaQuery({
    query: "(max-width: 425px)",
  })

  const useStyles = makeStyles({
    responsiveAccordionSummary: {
      justifyContent: isMobile ? "center" : "normal",
    },
  })
  const classes = useStyles()

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        style={{
          borderRadius: "3px",
          backgroundColor: "white",
          fontSize: "16px",
        }}
        classes={{
          content: classes.responsiveAccordionSummary,
        }}
      >
        {questionData.title}
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
