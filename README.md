# simple-server
## About
Simple server using docker / kubernetes.
This server takes an input number and returns its largest prime factor.

- Simple server application consists mainly of
  - main.js : main source file for the app
  - Dockerfile : containerzes the app
  - deployment.yaml : defines the app for deploying to the GKE cluster
  - service.yaml : defines how to access the app
-----------------------------
## How to test the application
1. Get service's external IP using gcloud command.
~~~
kubectl get services
~~~
2. Test the app with 
~~~
http://{external-IP}/?input={value}
~~~
When the input value is not given, -1 is returned.

-----------------------------
## References
- https://cloud.google.com/kubernetes-engine/docs/tutorials/hello-app#cloud-shell
- https://cloud.google.com/kubernetes-engine/docs/quickstarts/deploying-a-language-specific-app#node.js
