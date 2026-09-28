---
title: "Shipping Machine Learning to Production Without the Drama"
slug: "shipping-ml-to-production"
date: "2026-09-20"
description: "A practical playbook for taking ML models from a notebook to a reliable production service, covering packaging, monitoring, and rollback."
excerpt: "Most ML projects stall between a promising notebook and a dependable service. Here is the boring, reliable path we use to close that gap."
tags: ["machine learning", "mlops", "production", "case study"]
reading_time_minutes: 7
---

Most machine learning projects do not fail because the model is wrong. They fail in
the gap between a promising notebook and a service the business can depend on. This
post is the checklist we actually use at KHIM-TECH to close that gap.

## Start with the contract, not the model

Before training anything, we write down the interface: the inputs, the output, the
latency budget, and what "good enough" means in business terms. A model that is 2%
more accurate but 400ms slower is often the wrong trade.

- **Inputs**: named, typed, and versioned.
- **Output**: a single, documented shape.
- **Latency budget**: a hard number, measured at the 95th percentile.

## Package the model like software

A pickled model on someone's laptop is not a deliverable. We package the model, its
preprocessing, and its dependencies together so the thing that runs in production is
the exact thing we tested.

```python
def predict(payload: dict) -> dict:
    features = preprocess(payload)          # same code path as training
    score = model.predict_proba(features)
    return {"score": float(score[0][1])}
```

## Monitor the inputs, not just the outputs

The most common production failure is quiet: the world shifts, the inputs drift, and
the model keeps returning confident nonsense. We monitor input distributions and alert
on drift long before accuracy visibly degrades.

| Signal | Why it matters | Alert threshold |
| --- | --- | --- |
| Input drift | Detects a changing world | PSI > 0.2 |
| Null rate | Detects broken upstream data | 2x baseline |
| Latency p95 | Protects the user experience | Budget + 20% |

## Make rollback boring

Every deploy ships behind a flag, and every model version is addressable. If a new
model misbehaves, rolling back is a config change, not an incident. Boring is the goal.

The teams that ship ML reliably are rarely the ones with the fanciest models. They are
the ones who treated the model as one component in a well-understood system.
