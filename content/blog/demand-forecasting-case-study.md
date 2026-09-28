---
title: "A Case Study in Demand Forecasting for a Retail Client"
slug: "demand-forecasting-case-study"
date: "2026-09-27"
description: "How a simple, well-monitored forecasting model cut a retail client's stockouts without the complexity of a deep learning pipeline."
excerpt: "The client asked for deep learning. What they needed was a well-understood baseline, good data, and honest monitoring. Here is what we built."
tags: ["data science", "forecasting", "case study", "enterprise AI"]
reading_time_minutes: 5
---

A retail client came to us asking for a deep learning demand forecaster. What they
actually needed was fewer stockouts and less dead inventory. Those are not the same
request, and the difference saved them a great deal of money.

## The real problem

Their existing process was a spreadsheet updated weekly from gut feel. The result was
predictable: popular items ran out, slow items piled up. Before modelling anything, we
quantified the cost of each stockout and each unit of overstock. That number became our
objective.

## The unglamorous solution

We started with a seasonal baseline and added a gradient-boosted model on top of clean,
well-understood features: recent sales, promotions, price, and calendar effects. No deep
learning. The baseline alone captured most of the value.

- **Weeks 1-2**: clean the data and build the baseline.
- **Weeks 3-4**: add features that the buyers already reason about.
- **Weeks 5-6**: backtest honestly against the cost objective.

## The result

Measured against the previous quarter, the model reduced stockouts on the top 200 SKUs
by 31% while slightly *reducing* total inventory. The win came from disciplined data and
an honest objective, not model complexity.

The lesson we keep relearning: match the tool to the decision it informs. A model the
buyers understand and trust will beat a more accurate model they quietly ignore.
