import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid } from "@material-ui/core"
import CategoryPaper from "./CategoryPaper"
import { useStaticQuery } from "gatsby"

function CategorySelection(props) {
  const data = useStaticQuery(
    graphql`
      query CategoryTitles {
        allContentfulCategory(sort: { fields: order }) {
          nodes {
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

  return (
    <div
      style={{
        //background: "#100E17",
        padding: "16px",
        width: "100%",
      }}
    >
      <Grid item container spacing={2} justify={"center"}>
        {data.allContentfulCategory.nodes.map(category => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            style={{ flex: "1 0 320px", maxWidth: "320px" }}
          >
            <CategoryPaper
              title={category.title}
              icon={category.icon.file.url}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default CategorySelection
