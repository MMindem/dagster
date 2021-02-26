from dagster import execute_pipeline
from docs_snippets.concepts.solids_pipelines.branching_pipeline import branching_pipeline
from docs_snippets.concepts.solids_pipelines.linear_pipeline import linear_pipeline
from docs_snippets.concepts.solids_pipelines.multiple_io_pipeline import inputs_and_outputs_pipeline
from docs_snippets.concepts.solids_pipelines.order_based_dependency_pipeline import (
    nothing_dependency_pipeline,
)
from docs_snippets.concepts.solids_pipelines.pipelines import (
    one_plus_one_pipeline,
    one_plus_one_pipeline_def,
)


def test_one_plus_one_pipeline():
    result = execute_pipeline(one_plus_one_pipeline)
    assert result.output_for_solid("add_one", output_name="result") == 2


def test_one_plus_one_pipeline_def():
    result = execute_pipeline(one_plus_one_pipeline_def)
    assert result.output_for_solid("add_one", output_name="result") == 2


def test_linear_pipeline():
    result = execute_pipeline(linear_pipeline)
    assert result.output_for_solid("add_one_3", output_name="result") == 4


def test_other_pipeline():
    other_pipelines = [branching_pipeline, inputs_and_outputs_pipeline, nothing_dependency_pipeline]
    for pipeline in other_pipelines:
        result = execute_pipeline(pipeline)
        assert result.success