import cdk = require('@aws-cdk/core');
import { LogGroup } from './log-group';
import { cloudformation } from './logs.generated';
import { IFilterPattern } from './pattern';

/**
 * Properties for a MetricFilter
 */
export interface MetricFilterProps {
    /**
     * The log group to create the filter on.
     */
    logGroup: LogGroup;

    /**
     * Pattern to search for log events.
     */
    filterPattern: IFilterPattern;

    /**
     * The namespace of the metric to emit.
     */
    metricNamespace: string;

    /**
     * The name of the metric to emit.
     */
    metricName: string;

    /**
     * The value to emit for the metric.
     *
     * Can either be a literal number (typically "1"), or the name of a field in the structure
     * to take the value from the matched event. If you are using a field value, the field
     * value must have been matched using the pattern.
     *
     * If you want to specify a field from a matched JSON structure, use '$.fieldName',
     * and make sure the field is in the pattern (if only as '$.fieldName = *').
     *
     * If you want to specify a field from a matched space-delimited structure,
     * use '$fieldName'.
     *
     * @default "1"
     */
    metricValue?: string;

    /**
     * The value to emit if the pattern does not match a particular event.
     *
     * @default No metric emitted.
     */
    defaultValue?: number;
}

/**
 * A filter that extracts information from CloudWatch Logs and emits to CloudWatch Metrics
 */
export class MetricFilter extends cdk.Construct {
    constructor(parent: cdk.Construct, id: string, props: MetricFilterProps) {
        super(parent, id);

        new cloudformation.MetricFilterResource(this, 'Resource', {
            logGroupName: props.logGroup.logGroupName,
            filterPattern: props.filterPattern.logPatternString,
            metricTransformations: [{
                metricNamespace: props.metricNamespace,
                metricName: props.metricName,
                metricValue: props.metricValue !== undefined ? props.metricValue : '1',
                defaultValue: props.defaultValue
            }]
        });
    }
}
