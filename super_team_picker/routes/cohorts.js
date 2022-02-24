const express = require("express");
const knex = require("../db/client");

const router = express.Router();

router.get("/", (req, res) => {
  knex("cohorts")
    .orderBy("createdAt", "desc")
    .then((cohorts) => {
      res.render("cohorts/index", { cohorts: cohorts });
    });
});

router.get("/new", (req, res) => {
  res.render("cohorts/new", { cohort: false });
});

router.post("/", (req, res) => {
  knex("cohorts")
    .insert({
      name: req.body.name,
      logoUrl: req.body.logoUrl,
      members: req.body.members,
    })
    .returning("*")
    .then((cohorts) => {
      const cohort = cohorts[0];
      res.redirect(`/cohorts/${cohort.id}`);
    });
});

router.get("/:id", (req, res) => {
  knex("cohorts")
    .where("id", req.params.id)
    .first()
    .then((cohort) => {
      if (!cohort) {
        res.send("No cohort found");
      } else {
        res.render("cohorts/show", { cohort: cohort });
      }
    });
});

router.get("/:id/edit", (req, res) => {
  knex("cohorts")
    .where("id", req.params.id)
    .first()
    .then((cohort) => {
      res.render("cohorts/edit", { cohort: cohort });
    });
});

router.patch("/:id", (req, res) => {
  knex("cohorts")
    .where("id", req.params.id)
    .update({
      name: req.body.name,
      logoUrl: req.body.logoUrl,
      members: req.body.members,
    })
    .then(() => {
      res.redirect(`/cohorts/${req.params.id}`);
    });
});

router.delete('/:id', (req, res)=> {
    knex('cohorts')
    .where('id', req.params.id)
    .del()
    .then(()=> {
        res.redirect('/cohorts')
    })
})

module.exports = router;
