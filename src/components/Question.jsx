import React, { useState } from "react"
import PropTypes from "prop-types"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { useMediaQuery } from "react-responsive"
import { makeStyles } from "@material-ui/core/styles"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { INLINES } from "@contentful/rich-text-types"
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
  onClick: PropTypes.func,
}

export default function Question(props) {
  const [expanded, setExpanded] = useState(false)
  const { questionData, onClick } = props

  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => (
        <OutboundLink href={node.data.uri} target="_blank" rel="noopener">
          {children}
        </OutboundLink>
      ),
    },
  }

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
    <Accordion expanded={expanded}>
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
        onClick={() => {
          setExpanded(!expanded)
          if (!expanded) onClick(questionData.title)
        }}
      >
        {questionData.title}
      </AccordionSummary>
      <AccordionDetails style={{ backgroundColor: "#FAFBF5" }}>
        <div className={styles.answer}>
          {questionData.childContentfulQuestionAnswerRichTextNode.json.content.map(
            (document, i) => (
              <React.Fragment key={`${document.value}${i}`}>
                {documentToReactComponents(document, options)}
              </React.Fragment>
            )
          )}
        </div>
      </AccordionDetails>
    </Accordion>
  )
}
