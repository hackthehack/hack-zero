import React from "react";
import Grid from "@material-ui/core/Grid";
import {Field, Form, Formik} from "formik";
import {TextField} from "@material-ui/core";
import {Debug} from "../Debug";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export const HackPage = () => {
  const classes = useStyles();
  const INITIAL_VALUES = {
    hack: '',
    idea: '',
    members: [],
    files: [],
    links: [],
    videos: []
  };
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Grid item xs={12}>
        <Formik initialValues={INITIAL_VALUES} onSubmit={onSubmit}>
          {() => (
            <>
              <Form className={classes.root}>
                <div>
                  <Field name="hack">
                    {({field}) => (
                      <TextField
                        {...field}
                        required
                        label="Hack Name"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                      />
                    )}
                  </Field>
                </div>
                <div>
                  <Field name="idea">
                    {({field}) => (
                      <TextField
                        {...field}
                        label="Idea"
                        multiline
                        rows="4"
                        cols="6"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                      />
                    )}
                  </Field>
                </div>

                <Button color="primary">Submit</Button>
              </Form>
            </>
          )}
        </Formik>
      </Grid>
    </>
  )
};
