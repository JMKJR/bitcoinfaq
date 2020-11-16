import React from "react"
import Category from "./Category"
import { useStaticQuery, graphql } from "gatsby"

function Categories() {
  const data = useStaticQuery(
    graphql`
      query Content {
        allContentfulCategory {
          nodes {
            title
            questions {
              title
              answer {
                content {
                  content {
                    value
                  }
                }
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
        />
      )
    }
    return categories
  }

  return (
    <div style={{ margin: "0px", marginTop: "50px" }}>{renderCategories()}</div>
  )
}

export default Categories
