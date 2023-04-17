# Analyze
## UI
[UI Wireframe](https://share.balsamiq.com/c/4dn6cPiQ4fWU9D6ctLMZV3.png)
[stepper](https://mui.com/material-ui/react-stepper/)

## Key problem
Store the orthanc server address and credential in a dynamic way :
- Use an embedded database ? LowDB ?

## Deployment
Use docker Nginx image

## Orthanc api
### Merging to a study
http://<LOGIN>:<PASSWORD>@<IP>:<PORT>/studies/<TARGET>/merge -d '{"Resources":["<SOURCE>"]}'