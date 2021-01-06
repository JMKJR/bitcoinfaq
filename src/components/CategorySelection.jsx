import React from "react"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useStaticQuery } from "gatsby"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import styles from "./CategorySelection.module.css"
import CategoryBtn from "./CategoryBtn"

CategoryBtn.propTypes = {
  onClick: PropTypes.func,
}

const useStyles = makeStyles({
  btnGridItem: {
    flex: "1 0 320px",
    maxWidth: "320px",
  },
})

function CategorySelection(props) {
  const { onClick } = props
  const classes = useStyles()

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
    <div className={styles.responsiveCategorySelection}>
      <Grid item container spacing={2} justify="center">
        {data.allContentfulCategory.nodes.map(category => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            className={classes.btnGridItem}
            key={category.title}
          >
            <CategoryBtn
              title={category.title}
              icon={category.icon.file.url}
              onClick={onClick}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default CategorySelection
