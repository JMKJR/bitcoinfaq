import React from "react"
import Category from "./Category"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./Categories.module.css"
import PropTypes from "prop-types"

Categories.propTypes = {
  onClick: PropTypes.func,
}

function Categories(props) {
  const { onClick } = props

  const data = useStaticQuery(
    graphql`
      query Content {
        allContentfulCategory(sort: { fields: order }) {
          nodes {
            questions {
              childContentfulQuestionAnswerRichTextNode {
                json
              }
              title
            }
            title
            icon {
              file {
                url
              }
            }
          }
        }
      }
    `
  )

  function renderCategories() {
    let categories = []

    for (let category of data.allContentfulCategory.nodes) {
      categories.push(
        <Category
          categoryData={category}
          key={category.title.replace(/\s+/g, "-").toLowerCase()}
          onClick={onClick}
        />
      )
    }
    return categories
  }

  return <div className={styles.categoriesSeparation}>{renderCategories()}</div>
}

export default Categories
