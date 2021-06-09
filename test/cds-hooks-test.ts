const req: CDSHooks.DiscoveryResponse = {
  "services": [
    {
      "hook": "patient-view",
      "title": "Static CDS Service Example",
      "description": "An example of a CDS Service that returns a static set of cards",
      "id": "static-patient-greeter",
      "prefetch": {
        "patientToGreet": "Patient/{{context.patientId}}"
      }
    },
    {
      "hook": "order-select",
      "title": "Order Echo CDS Service",
      "description": "An example of a CDS Service that simply echos the order(s) being placed",
      "id": "order-echo",
      "prefetch": {
        "patient": "Patient/{{context.patientId}}",
        "medications": "MedicationRequest?patient={{context.patientId}}"
      }
    }
  ]
}

const res: CDSHooks.HookRequest = {
  "hookInstance": "d1577c69-dfbe-44ad-ba6d-3e05e953b2ea",
  "fhirServer": "http://hooks.smarthealthit.org:9080",
  "hook": "patient-view",
  "fhirAuthorization": {
    "access_token": "some-opaque-fhir-access-token",
    "token_type": "Bearer",
    "expires_in": 300,
    "scope": "patient/Patient.read patient/Observation.read",
    "subject": "cds-service4"
  },
  "context": {
    "userId": "Practitioner/example",
    "patientId": "1288992",
    "encounterId": "89284"
  },
  "prefetch": {
    "patientToGreet": {
      "resourceType": "Patient",
      "gender": "male",
      "birthDate": "1925-12-23",
      "id": "1288992",
      "active": true
    }
  }
}

const responseNoAuth: CDSHooks.HookRequest = {
  "hookInstance": "d1577c69-dfbe-44ad-ba6d-3e05e953b2ea",
  "hook": "patient-view",
  "context": {
    "userId": "Practitioner/example",
    "patientId": "1288992",
    "encounterId": "89284"
  },
  "prefetch": {
    "patientToGreet": {
      "resourceType": "Patient",
      "gender": "male",
      "birthDate": "1925-12-23",
      "id": "1288992",
      "active": true
    }
  }
}

const blankResponse: CDSHooks.HookResponse = {
  "cards": []
}

const filledResponse: CDSHooks.HookResponse = {
  "cards": [
    {
      "uuid": "4e0a3a1e-3283-4575-ab82-028d55fe2719",
      "summary": "Example Card",
      "indicator": "info",
      "detail": "This is an example card.",
      "source": {
        "label": "Static CDS Service Example",
        "url": "https://example.com",
        "icon": "https://example.com/img/icon-100px.png"
      },
      "links": [
        {
          "label": "Google",
          "url": "https://google.com",
          "type": "absolute"
        },
        {
          "label": "Github",
          "url": "https://github.com",
          "type": "absolute"
        },
        {
          "label": "SMART Example App",
          "url": "https://smart.example.com/launch",
          "type": "smart",
          "appContext": "{\"session\":3456356,\"settings\":{\"module\":4235}}"
        }
      ]
    },
    {
      "summary": "Another card",
      "indicator": "warning",
      "source": {
        "label": "Static CDS Service Example"
      }
    }
  ]
}

const feedback: CDSHooks.Feedback = {
  "card": "4e0a3a1e-3283-4575-ab82-028d55fe2719",
  "outcome": "accepted",
  "acceptedSuggestions": [{ "id": "e56e1945-20b3-4393-8503-a1a20fd73152" }],
  "outcomeTimestamp": "2020-12-11T00:00:00Z"
}

const feedback2: CDSHooks.Feedback = {
  "card": "9368d37b-283f-44a0-93ea-547cebab93ed",
  "outcome": "overridden",
  "overrideReason": {
    "reason": {
      "code": "d7ecf885",
      "system": "https://example.com/cds-hooks/override-reason-system"
    },
    "userComment": "clinician entered comment"
  },
  "outcomeTimestamp": "2020-12-11T00:00:00Z"
}
