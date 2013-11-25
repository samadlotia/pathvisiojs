var context = {
  "@vocab": "http://vocabularies.wikipathways.org/gpml/",
  "gpml": "http://vocabularies.wikipathways.org/gpml/",
  "wp": "http://vocabularies.wikipathways.org/wp/",
  "Pathway": {
    "@id": "gpml:Pathway",
    "@type": "xsd:string",
    "@container": "@set",
    "ex:contains": [
      "gpml:DataNode",
      "gpml:Interaction"
    ]
  },
  "DataNode": {
    "@id": "gpml:DataNode",
    "@type": "xsd:string",
    "ex:contains": [
      "gpml:Type"
    ]
  },
  "Interaction": {
    "@id": "gpml:Interaction",
    "@type": "xsd:string",
    "@container": "@set"
  },
  "_Name": {
    "@id": "gpml:Name",
    "@type": "xsd:string"
  },
  "_Type": {
    "@id": "gpml:_Type",
    "@type": "xsd:string"
  },
  "_GraphId": "@id",
  "dc": "http://purl.org/dc/elements/1.1/",
  "ex": "http://example.org/vocab#",
  "xsd": "http://www.w3.org/2001/XMLSchema#",
  "ex:contains": {
    "@type": "@id"
  }
};

/*
  "DataNode": {
    "@id": "gpml:DataNode",
    "@type": "gpml:DataNode",
    "@container": "@set"
  },
  "Interaction": {
    "@id": "gpml:Interaction",
    "@type": "xsd:string",
    "@container": "@set"
  },
  //*/