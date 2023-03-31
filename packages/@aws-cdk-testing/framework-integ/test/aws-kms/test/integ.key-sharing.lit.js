"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// !cdk-integ *
const cdk = require("aws-cdk-lib");
const kms = require("aws-cdk-lib/aws-kms");
const app = new cdk.App();
/// !show
/**
 * Stack that defines the key
 */
class KeyStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        this.key = new kms.Key(this, 'MyKey', { removalPolicy: cdk.RemovalPolicy.DESTROY });
    }
}
/**
 * Stack that uses the key
 */
class UseStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // Use the IKey object here.
        new kms.Alias(this, 'Alias', {
            aliasName: 'alias/foo',
            targetKey: props.key,
        });
    }
}
const keyStack = new KeyStack(app, 'KeyStack');
new UseStack(app, 'UseStack', { key: keyStack.key });
/// !hide
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWcua2V5LXNoYXJpbmcubGl0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW50ZWcua2V5LXNoYXJpbmcubGl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0JBQWdCO0FBQ2hCLG1DQUFtQztBQUNuQywyQ0FBMkM7QUFFM0MsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFMUIsU0FBUztBQUVUOztHQUVHO0FBQ0gsTUFBTSxRQUFTLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFHOUIsWUFBWSxLQUFjLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQzVELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxhQUFhLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7Q0FDRjtBQU1EOztHQUVHO0FBQ0gsTUFBTSxRQUFTLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFDOUIsWUFBWSxLQUFjLEVBQUUsRUFBVSxFQUFFLEtBQW9CO1FBQzFELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLDRCQUE0QjtRQUM1QixJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUMzQixTQUFTLEVBQUUsV0FBVztZQUN0QixTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUc7U0FDckIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBRUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQy9DLElBQUksUUFBUSxDQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDckQsU0FBUztBQUVULEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyAhY2RrLWludGVnICpcbmltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgKiBhcyBrbXMgZnJvbSAnYXdzLWNkay1saWIvYXdzLWttcyc7XG5cbmNvbnN0IGFwcCA9IG5ldyBjZGsuQXBwKCk7XG5cbi8vLyAhc2hvd1xuXG4vKipcbiAqIFN0YWNrIHRoYXQgZGVmaW5lcyB0aGUga2V5XG4gKi9cbmNsYXNzIEtleVN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgcHVibGljIHJlYWRvbmx5IGtleToga21zLktleTtcblxuICBjb25zdHJ1Y3RvcihzY29wZTogY2RrLkFwcCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuICAgIHRoaXMua2V5ID0gbmV3IGttcy5LZXkodGhpcywgJ015S2V5JywgeyByZW1vdmFsUG9saWN5OiBjZGsuUmVtb3ZhbFBvbGljeS5ERVNUUk9ZIH0pO1xuICB9XG59XG5cbmludGVyZmFjZSBVc2VTdGFja1Byb3BzIGV4dGVuZHMgY2RrLlN0YWNrUHJvcHMge1xuICBrZXk6IGttcy5JS2V5OyAvLyBVc2UgSUtleSBoZXJlXG59XG5cbi8qKlxuICogU3RhY2sgdGhhdCB1c2VzIHRoZSBrZXlcbiAqL1xuY2xhc3MgVXNlU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogY2RrLkFwcCwgaWQ6IHN0cmluZywgcHJvcHM6IFVzZVN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIC8vIFVzZSB0aGUgSUtleSBvYmplY3QgaGVyZS5cbiAgICBuZXcga21zLkFsaWFzKHRoaXMsICdBbGlhcycsIHtcbiAgICAgIGFsaWFzTmFtZTogJ2FsaWFzL2ZvbycsXG4gICAgICB0YXJnZXRLZXk6IHByb3BzLmtleSxcbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBrZXlTdGFjayA9IG5ldyBLZXlTdGFjayhhcHAsICdLZXlTdGFjaycpO1xubmV3IFVzZVN0YWNrKGFwcCwgJ1VzZVN0YWNrJywgeyBrZXk6IGtleVN0YWNrLmtleSB9KTtcbi8vLyAhaGlkZVxuXG5hcHAuc3ludGgoKTtcbiJdfQ==