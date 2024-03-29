function GetServicesData(req, res, next) {

var Services=[

  {

    "category": {

      "name": "Compute",

      "ref": "http://#"

    },

    "service": {

      "name": "Virtual Server",

      "ref": "http://#",

      "Properties": [ "Number of instance templates available", "GPU acceleration", "Custom instance creation feature", "CPU Limits", "Memory Limits", "Temporary Storage Limits" ]

    },

    "aws": [

      {

        "name": "Amazon EC2",

        "ref": "https://aws.amazon.com/ec2/",

        "icon": "Compute_AmazonEC2.png",

        "Properties": [ "39", "Yes", "No", "1 ? 40", "0,5 ? 244 GB", "Up to 48 TB (Multiple Disks)" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Virtual Machine",

        "ref": "https://docs.microsoft.com/en-us/azure/virtual-machines/",

        "icon": "Azure Virtual Machine.png",

        "Properties": [ "18", "No", "Yes", "1 Shared ? 32 dedicated CPU", "0,6 ? 208 GB", "3 TB" ]

      },

      {

        "name": "Virtual Machine Scale Sets",

        "ref": "https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-overview",

        "icon": "Azure VM Scale Set.png",

        "Properties": [ "40", "No", "No", "1 ? 32 CPU", "0,75 ? 448 GB", "2 TB" ]

      }

    ],

    "google": [

      {

        "name": "Compute Engine",

        "ref": "https://cloud.google.com/compute/",

        "icon": "Compute-Engine.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "Virtual Server",

        "ref": "https://console.ng.bluemix.net/catalog/infrastructure/hourly_public_virtual/",

        "icon": "virtual-server.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "Compute",

        "ref": "https://cloud.oracle.com/en_US/compute",

        "icon": "compute.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "Alibaba ECS",

        "ref": "https://www.alibabacloud.com/product/ecs?spm=a3c0i.7911826.675768.dnavproductsa1.66c31103Zzl5y8",

        "icon": "ecs.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Compute",

      "ref": "http://#"

    },

    "service": {

      "name": "Bare Metal Server",

      "ref": "http://#",

      "Properties": [ "Number of instance templates available", "GPU acceleration", "Custom instance creation feature", "CPU Limits", "Memory Limits", "Temporary Storage Limits" ]

    },

    "aws": [

      {

        "name": "None",

        "ref": "http://#",

        "icon": "none.png",

        "Properties": [ "39", "Yes", "No", "1 ? 40", "0,5 ? 244 GB", "Up to 48 TB (Multiple Disks)" ]

      }

    ],

    "azure": [

      {

        "name": "None",

        "ref": "http://#",

        "icon": "none.png",

        "Properties": [ "39", "Yes", "No", "1 ? 40", "0,5 ? 244 GB", "Up to 48 TB (Multiple Disks)" ]

      }

    ],

    "google": [

     {

        "name": "None",

        "ref": "http://#",

        "icon": "none.png",

        "Properties": [ "39", "Yes", "No", "1 ? 40", "0,5 ? 244 GB", "Up to 48 TB (Multiple Disks)" ]

      }

    ],

    "ibm": [

      {

        "name": "Bare Metal Servers",

        "ref": "https://www.ibm.com/cloud-computing/bluemix/bare-metal-servers",

        "icon": "virtual-server.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

       {

        "name": "Compute-Bare Metal Cloud Service",

        "ref": "https://cloud.oracle.com/en_US/bare-metal",

        "icon": "compute.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "Bare Metal Servers",

        "ref": "https://www.alibabacloud.com/product/ehpc?spm=a3c0i.7911826.675768.dnavproductsa7.66c31103p43kyz#overview",

        "icon": "ehpc.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Compute",

      "ref": "http://#"

    },

    "service": {

      "name": "Container Registration Service",

      "ref": "http://#",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon EC2 Container Registry",

        "ref": "https://aws.amazon.com/ecr/",

        "icon": "aws.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Container Registry ",

        "ref": "https://azure.microsoft.com/en-in/services/container-registry/",

        "icon": "Microsoft Azure.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Container Registry",

        "ref": "https://cloud.google.com/container-registry/",

        "icon": "Container-Registry.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "IBM Cloud Container Registry",

        "ref": "https://www.ibm.com/cloud/container-registry",

        "icon": "registry_icon.svg",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "Oracle Container Registry",

        "ref": "https://container-registry.oracle.com/pls/apex/f?p=113:101",

        "icon": "compute.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "Alibaba Container Registry Archives",

        "ref": "https://www.alibabacloud.com/product/container-service?spm=a3c0i.164274.675768.dnavproductsa4.a5df410xHxiFA",

        "icon": "ContainerServi.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Compute",

      "ref": "http://#"

    },

    "service": {

      "name": "Container Management Service",

      "ref": "http://#",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon EC2 Container Service",

        "ref": "https://aws.amazon.com/ecs/",

        "icon": "Compute_AmazonECS.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Container Service",

        "ref": "https://azure.microsoft.com/en-in/services/container-service/",

        "icon": "Azure Container Service.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Azure Container Instances",

        "ref": "https://azure.microsoft.com/en-in/services/container-instances/",

        "icon": "Azure Container Service.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Container Engine",

        "ref": "https://cloud.google.com/container-engine/",

        "icon": "Container-Engine.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "IBM Cloud Container Service",

        "ref": "https://www.ibm.com/cloud/container-service",

        "icon": "containerServiceIcon.svg",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "Container",

        "ref": "https://cloud.oracle.com/container",

        "icon": "oracle.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "Alibaba Bluemix Container Service",

        "ref": "https://www.alibabacloud.com/product/container-service",

        "icon": "ContainerServi.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Compute",

      "ref": "http://#"

    },

    "service": {

      "name": "Micro Services App Development Platform",

      "ref": "http://#",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS Lambda",

        "ref": "https://aws.amazon.com/lambda/",

        "icon": "Compute_AWSLambda.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Service Fabric",

        "ref": "https://azure.microsoft.com/en-in/services/service-fabric/",

        "icon": "Azure Service Fabric.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Azure Functions",

        "ref": "https://azure.microsoft.com/en-in/services/functions/",

        "icon": "Azure Functions.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Google Cloud Functions",

        "ref": "https://cloud.google.com/functions/",

        "icon": "Cloud-Functions.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "IBM Cloud Functions",

        "ref": "https://www.ibm.com/cloud/functions",

        "icon": "ibm-cloud-functions.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "Oracle Functions",

        "ref": "https://#",

        "icon": "compute.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "Coming Soon",

        "ref": "https://www.alibabacloud.com/",

        "icon": "ecs.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Compute",

      "ref": "http://#"

    },

    "service": {

      "name": "Virtual Private Servers",

      "ref": "http://#",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon Lightsail",

        "ref": "https://amazonlightsail.com/",

        "icon": "aws.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure App Service Environment",

        "ref": "https://docs.microsoft.com/en-us/azure/app-service-web/app-service-app-service-environment-intro",

        "icon": "Azure App Service - Web App (was Websites).png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "http://#",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "Virtual servers",

        "ref": "https://www.ibm.com/cloud-computing/bluemix/virtual-servers",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "Coming soon",

        "ref": "https://www.alibabacloud.com/product/vpc",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Compute",

      "ref": "http://#"

    },

    "service": {

      "name": "Batch Jobs",

      "ref": "https://en.wikipedia.org/wiki/Batch_processing",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS Batch",

        "ref": "https://aws.amazon.com/batch/",

        "icon": "aws.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Batch",

        "ref": "https://azure.microsoft.com/en-in/services/batch/",

        "icon": "Azure Batch.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Preemptible VMs",

        "ref": "https://cloud.google.com/preemptible-vms/",

        "icon": "Compute-Engine.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Compute",

      "ref": "http://#"

    },

    "service": {

      "name": "App Development/ Deployment (Java /.Net /PHP /Python)",

      "ref": "https://en.wikipedia.org/wiki/Platform_as_a_service",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS Elastic Beanstalk",

        "ref": "https://aws.amazon.com/documentation/elastic-beanstalk/",

        "icon": "Compute_AWSElasticBeanstalk_application.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Web Apps",

        "ref": "https://azure.microsoft.com/en-in/services/batch/",

        "icon": "Azure App Service - Web App (was Websites).png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Azure Cloud Services",

        "ref": "https://azure.microsoft.com/en-in/services/cloud-services/",

        "icon": "Azure Cloud Services - Web roles.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Google App engine",

        "ref": "https://cloud.google.com/appengine/",

        "icon": "App-Engine.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "Bluemix Cloud Foundry app runtimes",

        "ref": "https://www.ibm.com/cloud-computing/bluemix/runtimes",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "Application Container Cloud",

        "ref": "https://cloud.oracle.com/acc",

        "icon": "applicationcontainer.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Compute",

      "ref": "http://#"

    },

    "service": {

      "name": "Event Driven Computing",

      "ref": "https://#",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS Lambda",

        "ref": "#",

        "icon": "Compute_AWSLambda.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Functions",

        "ref": "https://azure.microsoft.com/en-in/services/functions/",

        "icon": "Azure Functions.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Azure Cloud Services",

        "ref": "https://azure.microsoft.com/en-in/services/cloud-services/",

        "icon": "Azure Cloud Services - Web roles.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Logic Apps",

        "ref": "https://azure.microsoft.com/en-in/services/logic-apps/",

        "icon": "Azure App Service - Logic App.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Cloud Functions",

        "ref": "https://cloud.google.com/functions/",

        "icon": "Cloud-Functions.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "IBM Cloud Functions",

        "ref": "https://www.ibm.com/cloud/functions",

        "icon": "ibm-cloud-functions.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Storage",

      "ref": "http://#"

    },

    "service": {

      "name": "Object Storage",

      "ref": "https://",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon Simple Storage Service (S3)",

        "ref": "https://aws.amazon.com/documentation/s3/",

        "icon": "Storage-Content-Delivery_AmazonS3_bucket.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Blob Storage",

        "ref": "https://azure.microsoft.com/en-in/services/storage/blobs/",

        "icon": "Azure Storage - Blob.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Cloud Storage",

        "ref": "https://cloud.google.com/storage/",

        "icon": "Cloud-Storage.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "Object Storage",

        "ref": "https://#",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "Object Storage",

        "ref": "https://cloud.oracle.com/storage",

        "icon": "storage.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "Object Storage Service",

        "ref": "https://www.alibabacloud.com/product/oss",

        "icon": "OSS.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Storage",

      "ref": "http://#"

    },

    "service": {

      "name": "Virtual Machine Disk Storage",

      "ref": "http://##",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon Elastic Block Storage (EBS)",

        "ref": "https://aws.amazon.com/ebs/",

        "icon": "Storage-Content-Delivery_AmazonEBS.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Page Blobs / Premium Storage",

        "ref": "https://azure.microsoft.com/en-in/services/storage/disks/",

        "icon": "VHD data disk.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Persistent Disk",

        "ref": "https://cloud.google.com/persistent-disk/",

        "icon": "Persistent-Disk.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "Block Storage",

        "ref": "https://#",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "Block Storage",

        "ref": "https://cloud.oracle.com/en_US/storage/object-storage/features",

        "icon": "storage.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "Block Storage",

        "ref": "https://#",

        "icon": "OSS.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Storage",

      "ref": "http://#"

    },

    "service": {

      "name": "File Storage (SMB Compatible)",

      "ref": "https://en.wikipedia.org/wiki/Network-attached_storage",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon Elastic File System (EFS)",

        "ref": "https://aws.amazon.com/efs/pricing/",

        "icon": "Storage-Content-Delivery_AmazonEFS.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure File Storage",

        "ref": "https://azure.microsoft.com/en-in/services/storage/files/",

        "icon": "Azure Storage - Files.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "http://#",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "File Storage",

        "ref": "https://#",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "NAS File Storage",

        "ref": "https://www.alibabacloud.com/product/nas",

        "icon": "nas.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Storage",

      "ref": "http://#"

    },

    "service": {

      "name": "Long Term Cold Storage",

      "ref": "https://en.wikipedia.org/wiki/Platform_as_a_service",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon Glacier",

        "ref": "https://aws.amazon.com/glacier/",

        "icon": "Storage-Content-Delivery_AmazonGlacier.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Cool Storage",

        "ref": "https://azure.microsoft.com/en-in/pricing/details/storage/blobs/",

        "icon": "Azure Storage.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Cloud Storage",

        "ref": "https://cloud.google.com/storage/",

        "icon": "Cloud-Storage.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "Storage Classic",

        "ref": "https://cloud.oracle.com/storage-classic/archive-storage/features",

        "icon": "oracle.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

    ,

    "alibaba": [

      {

        "name": "Object Storage Archive",

        "ref": "https://www.alibabacloud.com/product/oss",

        "icon": "OSS.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Storage",

      "ref": "http://#"

    },

    "service": {

      "name": "Hybrid Storage/Storage Gateway",

      "ref": "https://en.wikipedia.org/wiki/Cloud_storage_gateway",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS Storage Gateway",

        "ref": "https://aws.amazon.com/storagegateway/details/",

        "icon": "Storage-Content-Delivery_AWSStorageGateway.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Storsimple",

        "ref": "https://azure.microsoft.com/en-in/services/storsimple/",

        "icon": "Azure StorSimple.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "http://#",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Database",

      "ref": "https://en.wikipedia.org/wiki/Database"

    },

    "service": {

      "name": "Relational Database Management Service",

      "ref": "https://en.wikipedia.org/wiki/Relational_database_management_system",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon Aurora",

        "ref": "https://aws.amazon.com/rds/aurora/details/",

        "icon": "aws.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Amazon RDS",

        "ref": "https://aws.amazon.com/rds/",

        "icon": "Database_AmazonRDS.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure SQL Database",

        "ref": "https://azure.microsoft.com/en-in/services/sql-database/",

        "icon": "Azure SQL Database.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "SQL Server Stretch Database",

        "ref": "https://azure.microsoft.com/en-us/services/sql-server-stretch-database/",

        "icon": "Azure SQL Database.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Azure CosmosDB",

        "ref": "https://azure.microsoft.com/en-in/services/cosmos-db/",

        "icon": "Azure SQL Database.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Azure Database for MySQL",

        "ref": "https://azure.microsoft.com/en-us/services/mysql/",

        "icon": "Azure SQL Database.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Azure Database for PostgresSQL",

        "ref": "https://azure.microsoft.com/en-us/services/postgresql/",

        "icon": "Azure SQL Database.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Cloud SQL",

        "ref": "https://cloud.google.com/sql/",

        "icon": "Cloud-SQL.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Cloud Spanner",

        "ref": "https://cloud.google.com/spaner/",

        "icon": "Cloud-Spanner.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "dashDB for Transactions SQL Database",

        "ref": "https://console.ng.bluemix.net/catalog/services/dashdb-for-transactions-sql-database/",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "IBM DB2 on Cloud",

        "ref": "https://console.ng.bluemix.net/catalog/services/ibm-db2-on-cloud/",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Informix on Cloud",

        "ref": "https://console.ng.bluemix.net/catalog/services/informix-on-cloud/",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "DBaaS",

        "ref": "https://cloud.oracle.com/database",

        "icon": "database.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "MySQL Service",

        "ref": "https://cloud.oracle.com/mysql",

        "icon": "database.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "ApsaraDB for RDS MYSQL",

        "ref": "https://www.alibabacloud.com/product/apsaradb-for-rds/",

        "icon": "rds.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "ApsaraDB for RDS SQL Server",

        "ref": "https://www.alibabacloud.com/product/apsaradb-for-rds/",

        "icon": "rds.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "ApsaraDB for RDS PostgreSQL",

        "ref": "https://www.alibabacloud.com/product/apsaradb-for-rds/",

        "icon": "rds.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },



  {

    "category": {

      "name": "Database",

      "ref": "https://en.wikipedia.org/wiki/NoSQL"

    },

    "service": {

      "name": "Non Relational Database Management Service",

      "ref": "https://en.wikipedia.org/wiki/NoSQL",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon DynamoDB",

        "ref": "https://aws.amazon.com/dynamodb/",

        "icon": "Database_AmazonDynamoDB.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Amazon DynamoDB Accelerator (DAX)",

        "ref": "https://aws.amazon.com/dynamodb/dax/",

        "icon": "Database_AmazonDynamoDB.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure CosmosDB",

        "ref": "https://docs.microsoft.com/en-us/azure/cosmos-db/",

        "icon": "Azure DocumentDB.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

       {

        "name": "Azure Time Series Insights",

        "ref": "https://azure.microsoft.com/en-us/services/time-series-insights/",

        "icon": "Azure DocumentDB.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Cloud Datastore",

        "ref": "https://cloud.google.com/datastore/",

        "icon": "Cloud-Datastore.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Cloud BigTable",

        "ref": "https://cloud.google.com/bigtable/",

        "icon": "Cloud-Bigtable.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "Cloudant NoSQL DB",

        "ref": "https://console.ng.bluemix.net/catalog/services/cloudant-nosql-db/",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "IBM Graph",

        "ref": "https://console.ng.bluemix.net/catalog/services/ibm-graph/",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "NoSQL Database",

        "ref": "https://www.oracle.com/database/nosql/index.html",

        "icon": "NoSQL.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "Apsaradb for Mongodb",

        "ref": "https://www.alibabacloud.com/product/apsaradb-for-mongodb",

        "icon": "rds.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },



  {

    "category": {

      "name": "Database",

      "ref": "http://#"

    },

    "service": {

      "name": "In-Memory Data Store",

      "ref": "https://en.wikipedia.org/wiki/In-memory_database",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon ElastiCache",

        "ref": "https://aws.amazon.com/elasticache/",

        "icon": "Database_AmazonElasticCache.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure RedisCache",

        "ref": "https://azure.microsoft.com/en-in/services/cache/",

        "icon": "Azure Cache including Redis.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "http://#",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "ApsaraDB for Redis",

        "ref": "https://www.alibabacloud.com/product/apsaradb-for-redis",

        "icon": "redis.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Database",

      "ref": "https://en.wikipedia.org/wiki/Data_warehouse"

    },

    "service": {

      "name": "Data Warehousing",

      "ref": "https://en.wikipedia.org/wiki/Data_warehouse",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon Redshift",

        "ref": "https://aws.amazon.com/redshift/",

        "icon": "Database_AmazonRedshift.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure SQL Datawarehouse",

        "ref": "https://azure.microsoft.com/en-in/services/sql-data-warehouse/",

        "icon": "Azure Data Warehouse.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Big Query",

        "ref": "https://cloud.google.com/bigquery/",

        "icon": "BigQuery.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "dashDB for Analytics",

        "ref": "https://console.ng.bluemix.net/catalog/services/dashdb-for-analytics/",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "Exadata",

        "ref": "http://www.oracle.com/us/corporate/features/exadata-service/index.html",

        "icon": "database.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "Alibaba MaxCompute ODPS",

        "ref": "https://www.alibabacloud.com/product/maxcompute",

        "icon": "MaxCompute.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Migration Services",

      "ref": "http://#"

    },

    "service": {

      "name": "Database Migration Services",

      "ref": "https://en.wikipedia.org/wiki/Data_migration",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS Database Migration Service",

        "ref": "https://aws.amazon.com/dms/",

        "icon": "Database_AWSDatabaseMigrationService.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Database Migration Service (Preview)",

        "ref": "https://azure.microsoft.com/en-in/blog/azure-database-migration-service-announcement-at-build/",

        "icon": "Microsoft Azure.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "#",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "Lift",

        "ref": "https://console.ng.bluemix.net/catalog/services/lift/",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "Data Transmission Service ",

        "ref": "https://www.alibabacloud.com/product/data-transmission-service",

        "icon": "dts.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Migration Services",

      "ref": "http://#"

    },

    "service": {

      "name": "Server Migration Services",

      "ref": "#",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS Server Migration Service",

        "ref": "https://aws.amazon.com/server-migration-service/",

        "icon": "aws.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Site Recovery",

        "ref": "https://docs.microsoft.com/azure/site-recovery/site-recovery-migrate-to-azure",

        "icon": "Azure Site Recovery.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

	  {

        "name": "Azure Websites Migration Assistant",

        "ref": "https://azure.microsoft.com/en-us/downloads/migration-assistant/",

        "icon": "Microsoft Azure.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "#",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Migration Services",

      "ref": "http://#"

    },

    "service": {

      "name": "Small Scale Data Transfer Service",

      "ref": "http://#",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS Import/Export",

        "ref": "https://aws.amazon.com/documentation/elastic-beanstalk/",

        "icon": "Storage-Content-Delivery_AWSImportExportSnowball.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Import/Export",

        "ref": "https://azure.microsoft.com/en-in/pricing/details/storage-import-export/",

        "icon": "Microsoft Azure.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "http://#",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Migration Services",

      "ref": "http://#"

    },

    "service": {

      "name": "Large Scale Data Transfer Solution(Petabyte Scale)",

      "ref": "http://#",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS Snowball",

        "ref": "https://aws.amazon.com/snowball/",

        "icon": "Storage-Content-Delivery_AWSImportExportSnowball.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "",

        "ref": "#",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "#",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Migration Services",

      "ref": "http://#"

    },

    "service": {

      "name": "Large Scale Data Transfer Solution(Terabyte Scale)",

      "ref": "http://#",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS Snowball Edge",

        "ref": "https://aws.amazon.com/snowball-edge/",

        "icon": "Storage-Content-Delivery_AWSImportExportSnowball.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Data Box (Preview)",

        "ref": "https://azure.microsoft.com/en-us/services/storage/databox/",

        "icon": "Microsoft Azure.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "#",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Migration Services",

      "ref": "http://#"

    },

    "service": {

      "name": "Large Scale Data Transfer Solution(Exabyte Scale)",

      "ref": "http://#",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS Snowball Edge",

        "ref": "https://aws.amazon.com/snowmobile/",

        "icon": "Storage-Content-Delivery_AWSImportExportSnowball.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "",

        "ref": "#",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Transfer Appliance (Beta)",

        "ref": "https://cloud.google.com/transfer-appliance/",

        "icon": "Generic-GCP.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Networking & Content Delivery",

      "ref": "http://#"

    },

    "service": {

      "name": "Virtual Networking",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon VPC",

        "ref": "https://aws.amazon.com/vpc/",

        "icon": "Networking_AmazonVPC.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure VNet",

        "ref": "https://azure.microsoft.com/en-in/services/virtual-network/",

        "icon": "Azure App Service - Web App (was Websites).png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Cloud Virtual Network",

        "ref": "https://cloud.google.com/products/networking/",

        "icon": "Cloud-Virtual-Network.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "Oracle Virtual Network",

        "ref": "https://cloud.oracle.com/networking",

        "icon": "oracle.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "Virtual Private Cloud",

        "ref": "https://www.alibabacloud.com/product/vpc",

        "icon": "vpc.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },



  {

    "category": {

      "name": "Networking & Content Delivery",

      "ref": "http://#"

    },

    "service": {

      "name": "Network Gateway",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon VPN",

        "ref": "http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/vpn-connections.html/",

        "icon": "aws.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure VPN Gateway",

        "ref": "https://azure.microsoft.com/en-in/pricing/details/vpn-gateway/",

        "icon": "Azure VPN Gateway.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Cloud VPN",

        "ref": "https://cloud.google.com/products/networking/",

        "icon": "Cloud-Virtual-Network.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "Oracle IPSec VPN",

        "ref": "https://docs.us-phoenix-1.oraclecloud.com/Content/Network/Tasks/managingIPsec.htm",

        "icon": "oracle.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Networking & Content Delivery",

      "ref": "http://#"

    },

    "service": {

      "name": "Content Delivery Network",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon CloudFront",

        "ref": "https://aws.amazon.com/documentation/elastic-beanstalk/",

        "icon": "Storage-Content-Delivery_AmazonCloudFront.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure CDN",

        "ref": "https://azure.microsoft.com/en-in/services/cdn/",

        "icon": "Azure Content Delivery Network (CDN).png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Cloud CDN",

        "ref": "https://cloud.google.com/cdn/",

        "icon": "Cloud-CDN.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "Content Delivery Network",

        "ref": "https://#",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "Dyn",

        "ref": "https://www.oracle.com/corporate/acquisitions/dyn/index.html",

        "icon": "oracle.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "Alibaba Content Delivery Network",

        "ref": "https://www.alibabacloud.com/product/cdn",

        "icon": "cdn.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Networking",

      "ref": "http://#"

    },

    "service": {

      "name": "Networking & Content Delivery",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon Route 53",

        "ref": "https://aws.amazon.com/route53/",

        "icon": "Networking_AmazonRoute53.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure DNS",

        "ref": "https://azure.microsoft.com/en-in/services/dns/",

        "icon": "Azure DNS.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Cloud DNS",

        "ref": "https://cloud.google.com/dns/",

        "icon": "Cloud-DNS.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "Domain Name Service",

        "ref": "https://#",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "Dyn",

        "ref": "https://cloudmarketplace.oracle.com/marketplace/en_US/adf.task-flow?tabName=O&adf.tfDoc=%2FWEB-INF%2Ftaskflow%2Fadhtf.xml&application_id=12364973&adf.tfId=adhtf",

        "icon": "oracle.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "Alibaba Cloud DNS",

        "ref": "https://www.alibabacloud.com/product/dns",

        "icon": "DNS.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

 {

    "category": {

      "name": "Networking",

      "ref": "http://#"

    },

    "service": {

      "name": "Global Traffic Management",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon Route 53 Traffic Flow",

        "ref": "https://aws.amazon.com/blogs/aws/new-route-53-traffic-flow/",

        "icon": "Networking_AmazonRoute53.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Traffic Manager",

        "ref": "https://azure.microsoft.com/en-in/services/traffic-manager/",

        "icon": "Azure Traffic Manager.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "#",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Networking & Content Delivery",

      "ref": "http://#"

    },

    "service": {

      "name": "Private Connectivity",

      "ref": "https://en.wikipedia.org/wiki/Platform_as_a_service",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS Direct Connect",

        "ref": "https://aws.amazon.com/directconnect/",

        "icon": "Networking_AWSDirectConnect.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Express Route",

        "ref": "https://azure.microsoft.com/en-in/services/expressroute/",

        "icon": "Azure ExpressRoute.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Cloud InterConnect",

        "ref": "https://cloud.google.com/interconnect/",

        "icon": "Cloud-Interconnect.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "Direct Link",

        "ref": "https://www.ibm.com/cloud-computing/bluemix/direct-link",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "FastConnect",

        "ref": "https://cloud.oracle.com/en_US/networking-classic/fastconnect/features",

        "icon": "oracle.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "Alibaba Express Connect",

        "ref": "https://www.alibabacloud.com/product/express-connect",

        "icon": "expressconnect.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Networking & Content Delivery",

      "ref": "http://#"

    },

    "service": {

      "name": "Load Balancers",

      "ref": "https://en.wikipedia.org/wiki/Load_balancing_(computing)",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Elastic Load Balancing",

        "ref": "https://aws.amazon.com/elasticloadbalancing/",

        "icon": "aws.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Load Balancer",

        "ref": "https://azure.microsoft.com/en-in/services/load-balancer/",

        "icon": "Azure load balancer (automatic).png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Cloud Load Balancing",

        "ref": "https://cloud.google.com/load-balancing/",

        "icon": "Cloud-Load-Balancing.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "Local Load Balancing",

        "ref": "https://www.ibm.com/cloud-computing/bluemix/load-balancing",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "Oracle Load Balancer",

        "ref": "https://docs.us-phoenix-1.oraclecloud.com/Content/Balance/Concepts/balanceoverview.htm",

        "icon": "oracle.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "Server Load Balancing",

        "ref": "https://www.alibabacloud.com/product/server-load-balancer",

        "icon": "SLB.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Developer Tools",

      "ref": "https://en.wikipedia.org/wiki/Programming_tool"

    },

    "service": {

      "name": "Cloud Software Development Kit",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

       {

        "name": "AWS Code Star",

        "ref": "https://aws.amazon.com/codestar/",

        "icon": "Developer-Tools_AWSCodeCommit.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "AWS CodeCommit",

        "ref": "https://aws.amazon.com/codecommit/",

        "icon": "Developer-Tools_AWSCodeCommit.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "AWS CodeBuild",

        "ref": "https://aws.amazon.com/codebuild/",

        "icon": "aws.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "AWS CodeDeploy",

        "ref": "https://aws.amazon.com/codedeploy/",

        "icon": "Developer-Tools_AWSCodeDeploy.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "AWS CodePipeline",

        "ref": "https://aws.amazon.com/codepipeline",

        "icon": "Developer-Tools_AWSCodePipeline.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "AWS X-Ray",

        "ref": "https://aws.amazon.com/xray/",

        "icon": "aws.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }



    ],

    "azure": [

      {

        "name": "Visual Studio Team Services",

        "ref": "https://www.visualstudio.com/team-services/",

        "icon": "Visual Studio Team Services.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Cloud Source Repositories",

        "ref": "https://cloud.google.com/source-repositories/",

        "icon": "Generic-GCP.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "Active Deploy",

        "ref": "https://console.ng.bluemix.net/catalog/services/active-deploy/",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Continuous Delivery",

        "ref": "https://console.ng.bluemix.net/catalog/services/continuous-delivery/",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Delivery Pipeline",

        "ref": "https://console.ng.bluemix.net/catalog/services/delivery-pipeline/",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Globalization Pipeline",

        "ref": "https://console.ng.bluemix.net/catalog/services/globalization-pipeline/",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Track  & Plan",

        "ref": "https://console.ng.bluemix.net/catalog/services/track--plan/",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "Developer Cloud Service",

        "ref": "https://cloud.oracle.com/developer_service",

        "icon": "developer.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Developer Tools",

      "ref": "https://en.wikipedia.org/wiki/Programming_tool"

    },

    "service": {

      "name": "Cloud Software Development Kit",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS SDK",

        "ref": "#",

        "icon": "SDKs_Python.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure SDK Visual Studio",

        "ref": "https://www.visualstudio.com/team-services/",

        "icon": "Azure SDK.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Cloud SDK Cloud Tools for IntelliJ",

        "ref": "http://#",

        "icon": "Cloud-Tools-for-PowerShell.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Cloud Tools for Android Studio",

        "ref": "http://#",

        "icon": "Cloud-Tools-for-PowerShell.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Cloud Tools for Powershell",

        "ref": "http://#",

        "icon": "Cloud-Tools-for-PowerShell.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Google Plugin for Eclipse",

        "ref": "http://#",

        "icon": "Cloud-Tools-for-PowerShell.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },



  {

    "category": {

      "name": "Management Tools",

      "ref": "http://#"

    },

    "service": {

      "name": "Server Management Services",

      "ref": "https://en.wikipedia.org/wiki/Platform_as_a_service",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon EC2 Systems Manager",

        "ref": "https://aws.amazon.com/documentation/elastic-beanstalk/",

        "icon": "aws.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Operational Insights ",

        "ref": "https://azure.microsoft.com/en-us/resources/videos/azure-operational-insights-overview/",

        "icon": "Operations Management Suite (OMS).png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "http://#",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "Oracle Management Cloud",

        "ref": "https://cloud.oracle.com/management",

        "icon": "oracle.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Management Tools",

      "ref": "https://en.wikipedia.org/wiki/Infrastructure_as_Code"

    },

    "service": {

      "name": "Cloud Deployment Templates/ Infra as Code",

      "ref": "https://en.wikipedia.org/wiki/Platform_as_a_service",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS CloudFormation",

        "ref": "https://aws.amazon.com/cloudformation/",

        "icon": "Management-Tools_AWSCloudFormation.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Resource Manager",

        "ref": "https://azure.microsoft.com/en-us/features/resource-manager/",

        "icon": "Resource Group.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Cloud Resource Manager",

        "ref": "https://cloud.google.com/resource-manager/",

        "icon": "Generic-GCP.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "IBM Cloud Schematics",

        "ref": "https://www.ibm.com/cloud/schematics",

        "icon": "schematics_icon.svg",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "Stack Manager",

        "ref": "https://docs.oracle.com/cloud/latest/stack-manager-cloud/index.html",

        "icon": "oracle.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "Resource Orchestration Service",

        "ref": "https://www.alibabacloud.com/product/ros",

        "icon": "ros.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Management Tools",

      "ref": "https://en.wikipedia.org/wiki/Infrastructure_as_Code"

    },

    "service": {

      "name": "Logging & Monitoring",

      "ref": "https://en.wikipedia.org/wiki/Log_management",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon CloudWatch",

        "ref": "https://aws.amazon.com/cloudwatch/",

        "icon": "Management-Tools_AWSCloudFormation.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "AWS CloudTrail",

        "ref": "https://aws.amazon.com/cloudtrail/",

        "icon": "Management-Tools_AWSCloudTrail.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Log Analytics",

        "ref": "https://azure.microsoft.com/en-in/services/log-analytics/",

        "icon": "OMS Log Analytics.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Azure portal",

        "ref": "https://portal.azure.com/#",

        "icon": "Azure Management Portal.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Application Insights",

        "ref": "https://azure.microsoft.com/en-in/services/application-insights/",

        "icon": "Azure Application Insights.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }



    ],

    "google": [

      {

        "name": "Google StackDriver",

        "ref": "https://cloud.google.com/stackdriver/",

        "icon": "Stackdriver.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Monitoring",

        "ref": "https://cloud.google.com/monitoring/",

        "icon": "Monitoring.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Logging",

        "ref": "https://cloud.google.com/logging/",

        "icon": "Logging.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Error Reporting",

        "ref": "https://cloud.google.com/error-reporting/",

        "icon": "Error-Reporting.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Trace",

        "ref": "https://cloud.google.com/trace/",

        "icon": "Trace.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Debugger",

        "ref": "https://cloud.google.com/debugger/",

        "icon": "Debugger.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "Application Performance Monitoring",

        "ref": "https://cloud.oracle.com/application-performance-monitoring",

        "icon": "AppPerfMonitoring.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Management Cloud",

        "ref": "",

        "icon": "AppPerfMonitoring.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "CloudMonitor",

        "ref": "https://www.alibabacloud.com/product/cloud-monitor",

        "icon": "CloudMonitor.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },



  {

    "category": {

      "name": "Management Tools",

      "ref": ""

    },

    "service": {

      "name": "Resource/Configuration Inventory",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS Config",

        "ref": "https://aws.amazon.com/config/",

        "icon": "Management-Tools_AWSConfig.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure portal(audit logs)",

        "ref": "",

        "icon": "Azure Management Portal.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Cloud Security Scanner",

        "ref": "",

        "icon": "Generic-GCP.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "Alibaba Log Service",

        "ref": "https://www.alibabacloud.com/product/log-service",

        "icon": "log-service.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Management Tools",

      "ref": ""

    },

    "service": {

      "name": "Server Automation",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS OpsWorks",

        "ref": "https://aws.amazon.com/opsworks/",

        "icon": "Management-Tools_AWSOpsWorks.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Resource Manager",

        "ref": "https://azure.microsoft.com/en-us/features/resource-manager/",

        "icon": "Resource Group.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Azure Automation",

        "ref": "https://docs.microsoft.com/en-us/azure/automation/",

        "icon": "Azure Automation.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "VM Extentions",

        "ref": "https://docs.microsoft.com/en-us/azure/virtual-machines/virtual-machines-windows-extensions-features",

        "icon": "Azure VM symbol only.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "Resource Orchestration Service ",

        "ref": "https://www.alibabacloud.com/product/ros",

        "icon": "ros.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Management Tools",

      "ref": ""

    },

    "service": {

      "name": "Server Automation",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS Service Catalog",

        "ref": "https://aws.amazon.com/servicecatalog/",

        "icon": "Management-Tools_AWSServiceCatalog.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Management Tools",

      "ref": ""

    },

    "service": {

      "name": "Cloud Cost/Performance/Security Advisor",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS Trusted Advisor",

        "ref": "https://aws.amazon.com/premiumsupport/trustedadvisor/",

        "icon": "Management-Tools_AWSTrustedAdvisor.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Advisor",

        "ref": "https://azure.microsoft.com/en-in/services/advisor/",

        "icon": "Azure Security Center.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Google Cloud Platform Security",

        "ref": "https://cloud.google.com/security/",

        "icon": "Generic-GCP.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Management Tools",

      "ref": ""

    },

    "service": {

      "name": "Alerts and Remediation guidance Service",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS Personal Health Dashboard",

        "ref": "",

        "icon": "aws.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Monitor",

        "ref": "https://docs.microsoft.com/en-us/azure/monitoring-and-diagnostics/monitoring-overview-azure-monitor",

        "icon": "Azure monitor.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

	  {

        "name": "Azure Mperations Management Suite (OMS)",

        "ref": "https://www.microsoft.com/en-us/cloud-platform/operations-management-suite",

        "icon": "Azure OMS.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "Cloud monitoring, Notification and Alerts",

        "ref": "https://www.alibabacloud.com/product/cloud-monitor",

        "icon": "CloudMonitor.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Management Tools",

      "ref": ""

    },

    "service": {

      "name": "Cloud Management Tools",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS Command Line Interface",

        "ref": "",

        "icon": "SDKs_AWSCLI.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "AWS Management Console",

        "ref": "",

        "icon": "aws.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Command Line Interface",

        "ref": "",

        "icon": "Microsoft Azure.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Azure Powershell",

        "ref": "",

        "icon": "Microsoft Azure.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Azure Management Console",

        "ref": "",

        "icon": "Azure Management Portal.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Azure Cloud Shell",

        "ref": "https://azure.microsoft.com/en-us/features/cloud-shell/",

        "icon": "Azure Management Portal.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Cloud Shell",

        "ref": "https://cloud.google.com/shell/",

        "icon": "Generic-GCP.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Cloud Console",

        "ref": "https://cloud.google.com/cloud-console/",

        "icon": "Generic-GCP.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Billing API",

        "ref": "https://cloud.google.com/billing/docs/",

        "icon": "Generic-GCP.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Cloud APIs",

        "ref": "https://cloud.google.com/apis/",

        "icon": "Generic-GCP.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Management Tools",

      "ref": ""

    },

    "service": {

      "name": "Automated Infra Management Services",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS Managed Services",

        "ref": "https://aws.amazon.com/managed-services/",

        "icon": "aws.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Disaster Recovery Services",

      "ref": ""

    },

    "service": {

      "name": "Automated Disaster Recovery Services",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS Disaster Recovery",

        "ref": "https://aws.amazon.com/disaster-recovery/",

        "icon": "aws.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Site Recovery",

        "ref": "",

        "icon": "Azure Site Recovery.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Azure Backup",

        "ref": "",

        "icon": "Azure Backup.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "Alibaba Disaster Recovery",

        "ref": "https://www.alibabacloud.com/solutions/hosting/Disaster-Recovery",

        "icon": "alibaba.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Security & Identity, Compliance",

      "ref": ""

    },

    "service": {

      "name": "Identity & Access Management",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS Identity and Access Management (IAM)",

        "ref": "https://aws.amazon.com/documentation/iam/",

        "icon": "Security-Identity_AWSIAM.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Active Directory",

        "ref": "https://azure.microsoft.com/en-in/services/active-directory/",

        "icon": "Azure Active Directory.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Cloud IAM",

        "ref": "https://cloud.google.com/iam/",

        "icon": "Cloud-IAM.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Cloud Identity-Aware Proxy",

        "ref": "https://cloud.google.com/iap/",

        "icon": "Cloud-Identity-Aware-Proxy.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "Identity",

        "ref": "https://cloud.oracle.com/en_US/identity/features",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "Resource Access Management        ",

        "ref": "https://www.alibabacloud.com/product/ram",

        "icon": "ram.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Security & Identity, Compliance",

      "ref": ""

    },

    "service": {

      "name": "Cloud Security Assesment Service",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon Inspector",

        "ref": "https://aws.amazon.com/inspector/",

        "icon": "Security-Identity_AmazonInspector.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Security Center",

        "ref": "https://azure.microsoft.com/en-in/services/security-center/",

        "icon": "Azure Security Center.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Security & Identity, Compliance",

      "ref": ""

    },

    "service": {

      "name": "Secured Socket Layer(SSL) Certificates",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS Certificate Manager",

        "ref": "https://aws.amazon.com/certificate-manager/",

        "icon": "Security-Identity_ACM_certificate-manager.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "App Service Certificate",

        "ref": "https://azure.microsoft.com/en-us/updates/introducing-app-service-certificates/",

        "icon": "Azure App Service.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "SSL Certificates",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "SSL Certificates",

        "ref": "https://www.alibabacloud.com/product/certificates",

        "icon": "SSL.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Security & Identity, Compliance",

      "ref": ""

    },

    "service": {

      "name": "Hardware Based Security Module",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS CloudHSM",

        "ref": "https://aws.amazon.com/cloudhsm/",

        "icon": "Security-Identity_AWSCloudHSM.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure KeyVault",

        "ref": "https://azure.microsoft.com/en-in/services/key-vault/",

        "icon": "Azure Key Vault.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Cloud Key Management Service",

        "ref": "https://cloud.google.com/kms/",

        "icon": "Cloud-Platform-Security.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "Key Protect",

        "ref": "https://console.ng.bluemix.net/catalog/services/key-protect/",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "Key Management Service",

        "ref": "https://www.alibabacloud.com/product/key-management-service",

        "icon": "ram.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Security & Identity, Compliance",

      "ref": ""

    },

    "service": {

      "name": "Directory Services",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS Directory Service",

        "ref": "https://aws.amazon.com/directoryservice/",

        "icon": "Security-Identity_AWSDirectoryService.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Active Directory",

        "ref": "https://azure.microsoft.com/en-us/services/active-directory/",

        "icon": "Azure Active Directory.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Azure Active Directory B2C",

        "ref": "https://azure.microsoft.com/en-us/services/active-directory-b2c/",

        "icon": "Azure Active Directory.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Azure Active Directory Domain Services",

        "ref": "https://azure.microsoft.com/en-us/services/active-directory-ds/",

        "icon": "Azure Active Directory.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Azure Active Directory Multi Factor Authentication",

        "ref": "https://azure.microsoft.com/en-us/services/multi-factor-authentication/",

        "icon": "Azure Active Directory.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Security & Identity, Compliance",

      "ref": ""

    },

    "service": {

      "name": "Key Management Services",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS Key Management Service",

        "ref": "",

        "icon": "Security-Identity_AWSKMS.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure KeyVault",

        "ref": "",

        "icon": "Azure Key Vault.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "Key Management Service ",

        "ref": "https://www.alibabacloud.com/product/key-management-service",

        "icon": "KMS.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Security & Identity, Compliance",

      "ref": ""

    },

    "service": {

      "name": "Consolidated Manag of Multiple Cloud Accounts",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS Organizations",

        "ref": "",

        "icon": "aws.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Security & Identity, Compliance",

      "ref": ""

    },

    "service": {

      "name": "DDos Protection Service",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS Shield",

        "ref": "https://aws.amazon.com/shield/",

        "icon": "aws.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "DDOS Pro and Basic",

        "ref": "https://www.alibabacloud.com/product/ddos-pro",

        "icon": "ddos.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Security & Identity, Compliance",

      "ref": ""

    },

    "service": {

      "name": "Web Application Firewall",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS WAF",

        "ref": "https://aws.amazon.com/waf/",

        "icon": "Security-Identity_AWSWAF.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure WAF",

        "ref": "",

        "icon": "Firewall.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "Hardware Firewall",

        "ref": "https://#",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "Web Application Firewall",

        "ref": "https://www.alibabacloud.com/product/waf",

        "icon": "waf.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Security & Identity, Compliance",

      "ref": ""

    },

    "service": {

      "name": "Security & Compliance Service",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS Artifact",

        "ref": "https://aws.amazon.com/artifact/",

        "icon": "aws.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Security & Compliance",

        "ref": "https://azure.microsoft.com/en-in/support/trust-center/",

        "icon": "Azure Security Center.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "Alibaba Truster Center ",

        "ref": "https://www.alibabacloud.com/trust-center",

        "icon": "alibaba.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Big Data & Advanced Analytics",

      "ref": ""

    },

    "service": {

      "name": "Big Data Query as a Service",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon Athena",

        "ref": "https://aws.amazon.com/athena/",

        "icon": "aws.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Data Lake Analytics",

        "ref": "https://azure.microsoft.com/en-in/services/data-lake-analytics/",

        "icon": "Azure Data Lake Analytics.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "E-MapReduce Service",

        "ref": "https://www.alibabacloud.com/product/e-mapreduce",

        "icon": "emr.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Big Data & Advanced Analytics",

      "ref": ""

    },

    "service": {

      "name": "Big Data Managed Cluster as a Service",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon EMR",

        "ref": "https://aws.amazon.com/emr/",

        "icon": "Analytics_AmazonEMR.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure HDInsight",

        "ref": "https://azure.microsoft.com/en-in/services/hdinsight/",

        "icon": "Azure HDInsight.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Cloud DataProc",

        "ref": "https://cloud.google.com/dataproc/",

        "icon": "Cloud-Dataproc.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "BigInsights for Apache Hadoop",

        "ref": "https://console.ng.bluemix.net/catalog/services/biginsights-for-apache-hadoop/",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "Big Data",

        "ref": "https://cloud.oracle.com/bigdata",

        "icon": "bigdata.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "E-MapReduce Service",

        "ref": "https://www.alibabacloud.com/product/e-mapreduce",

        "icon": "emr.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Big Data & Advanced Analytics",

      "ref": ""

    },

    "service": {

      "name": "Cloud Search",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon CloudSearch",

        "ref": "https://aws.amazon.com/cloudsearch/",

        "icon": "Application-Services_AmazonCloudSearch.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Amazon Elastic Search Service",

        "ref": "https://aws.amazon.com/cloudsearch/",

        "icon": "Application-Services_AmazonCloudSearch.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Search",

        "ref": "",

        "icon": "Azure Search.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Big Data & Advanced Analytics",

      "ref": ""

    },

    "service": {

      "name": "Streaming Service",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon Kinesis",

        "ref": "https://aws.amazon.com/kinesis/streams/",

        "icon": "Analytics_AmazonKinesis.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Stream Analytics",

        "ref": "https://azure.microsoft.com/en-us/services/stream-analytics/",

        "icon": "Azure Stream Analytics.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Azure Event Hub",

        "ref": "https://azure.microsoft.com/en-us/services/stream-analytics/",

        "icon": "Azure Event Hubs.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Cloud Dataflow",

        "ref": "https://cloud.google.com/dataflow/",

        "icon": "Cloud-Dataflow.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "Streaming Analytics",

        "ref": "https://console.ng.bluemix.net/catalog/services/streaming-analytics/",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "Event Hub (Apache Kafka as a Service)",

        "ref": "https://cloud.oracle.com/en_US/event-hub",

        "icon": "storage.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Big Data & Advanced Analytics",

      "ref": ""

    },

    "service": {

      "name": "Data Warehouse",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon Redshift",

        "ref": "https://aws.amazon.com/redshift/",

        "icon": "Database_AmazonRedshift.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure SQL Datawarehouse",

        "ref": "https://azure.microsoft.com/en-in/services/sql-data-warehouse/",

        "icon": "Azure Data Warehouse.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Big Query",

        "ref": "https://cloud.google.com/bigquery/",

        "icon": "BigQuery.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "Alibaba MaxCompute ODPS",

        "ref": "https://www.alibabacloud.com/product/maxcompute",

        "icon": "MaxCompute.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Big Data & Advanced Analytics",

      "ref": ""

    },

    "service": {

      "name": "Business Intelligence & Data Visualization",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon QuickSight",

        "ref": "https://quicksight.aws/",

        "icon": "Analytics_AmazonQuickSight.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "PowerBI",

        "ref": "https://powerbi.microsoft.com/en-us/",

        "icon": "Power BI Embedded.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Google Data Studio (Beta)",

        "ref": "https://cloud.google.com/data-studio/",

        "icon": "Data-Studio.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "Data Visualization",

        "ref": "https://cloud.oracle.com/en_US/data-visualization/features",

        "icon": "oracle.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Business Intelligence",

        "ref": "https://cloud.oracle.com/en_US/business-intelligence/features",

        "icon": "oracle.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "Data IDE",

        "ref": "https://www.alibabacloud.com/product/ide",

        "icon": "IDE.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Big Data & Advanced Analytics",

      "ref": ""

    },

    "service": {

      "name": "Cloud ETL",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS Data Pipeline",

        "ref": "https://aws.amazon.com/datapipeline/",

        "icon": "Analytics_AWSDataPipeline.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "AWS Glue",

        "ref": "https://aws.amazon.com/glue/",

        "icon": "aws.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Data Factory",

        "ref": "https://azure.microsoft.com/en-in/services/data-factory/",

        "icon": "Azure Data Factory.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Azure Data Catalog",

        "ref": "https://azure.microsoft.com/en-in/services/data-catalog/",

        "icon": "Azure Data Catalog.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Cloud DataPrep (Private Beta)",

        "ref": "https://cloud.google.com/dataprep/",

        "icon": "Cloud-Dataprep.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "Data Connect",

        "ref": "https://console.ng.bluemix.net/catalog/services/data-connect/",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "Data Integrator",

        "ref": "https://cloud.oracle.com/en_US/data-integrator",

        "icon": "integration.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Artificial Intelligence",

      "ref": ""

    },

    "service": {

      "name": "Language Processing AI",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon Lex",

        "ref": "https://aws.amazon.com/lex/",

        "icon": "aws.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

	{

        "name": "LUIS (Language Understanding Intelligent Service)",

        "ref": "https://azure.microsoft.com/en-us/services/cognitive-services/language-understanding-intelligent-service/",

        "icon": "Azure Cognative Services - luis_COLOR.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Azure Bot Service",

        "ref": "https://azure.microsoft.com/en-us/services/bot-service/",

        "icon": "Azure Cognative Services - Speech_COLOR.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Azure Speech Recognition API",

        "ref": "https://azure.microsoft.com/en-in/services/cognitive-services/speech/",

        "icon": "Azure Cognative Services - Speech_COLOR.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Natural Language API",

        "ref": "https://cloud.google.com/natural-language/",

        "icon": "Natural-Language-API.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "Natural Language Classifier",

        "ref": "https://console.ng.bluemix.net/catalog/services/natural-language-classifier/",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Language Translator",

        "ref": "https://console.ng.bluemix.net/catalog/services/language-translator/",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "AlchemyAPI",

        "ref": "https://console.ng.bluemix.net/catalog/services/alchemyapi/",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Conversation",

        "ref": "https://console.ng.bluemix.net/catalog/services/conversation/",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Discovery",

        "ref": "https://console.ng.bluemix.net/catalog/services/discovery/",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Document Conversion",

        "ref": "https://console.ng.bluemix.net/catalog/services/document-conversion/",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Speech to Text",

        "ref": "https://console.ng.bluemix.net/catalog/services/speech-to-text/",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Artificial Intelligence",

      "ref": ""

    },

    "service": {

      "name": "Speech Recognition AI",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon Polly",

        "ref": "",

        "icon": "aws.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Bing Speech API",

        "ref": "",

        "icon": "Azure Cognative Services - Speech_COLOR.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Translation API",

        "ref": "https://cloud.google.com/translate/",

        "icon": "Speech-API.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Speech API",

        "ref": "https://cloud.google.com/speech/",

        "icon": "Speech-API.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Artificial Intelligence",

      "ref": ""

    },

    "service": {

      "name": "Image Recognition AI",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon Rekognition",

        "ref": "",

        "icon": "aws.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Emotion API",

        "ref": "",

        "icon": "Azure Cognative Services - emotion_COLOR.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Face API",

        "ref": "",

        "icon": "Azure Cognative Services - emotion_COLOR.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Computer Vision API",

        "ref": "",

        "icon": "Azure Cognative Services - emotion_COLOR.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Vision API",

        "ref": "",

        "icon": "Vision-API.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "Visual Recognition",

        "ref": "https://console.ng.bluemix.net/catalog/services/visual-recognition/",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Retrieve and Rank",

        "ref": "https://console.ng.bluemix.net/catalog/services/retrieve-and-rank/",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Personality Insights",

        "ref": "https://console.ng.bluemix.net/catalog/services/personality-insights/",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Artificial Intelligence",

      "ref": ""

    },

    "service": {

      "name": "Machine Learning",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon Machine Learning",

        "ref": "",

        "icon": "Analytics_AmazonMachineLearning.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Machine Learning",

        "ref": "https://studio.azureml.net/",

        "icon": "Azure Machine Learning.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Azure Machine Learning Workbench",

        "ref": "https://docs.microsoft.com/en-in/azure/machine-learning/preview/quickstart-installation",

        "icon": "Azure Machine Learning.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }, {

        "name": "Azure Machine Learning Model Management",

        "ref": "https://docs.microsoft.com/en-in/azure/machine-learning/preview/model-management-overview",

        "icon": "Azure Machine Learning.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Cloud DataLab",

        "ref": "",

        "icon": "Cloud-Datalab.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Cloud Machine Learning Services",

        "ref": "",

        "icon": "Cloud-Machine-Learning.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "IBM Watson Machine Learning",

        "ref": "https://console.ng.bluemix.net/catalog/services/ibm-watson-machine-learning/",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Mobile Services",

      "ref": ""

    },

    "service": {

      "name": "Mobile App Development Services",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS Mobile Hub",

        "ref": "",

        "icon": "Mobile-Services_AWSMobileHub.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Mobile Apps",

        "ref": "",

        "icon": "Azure App Service - Mobile App (was Mobile Services).png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Cloud Mobile App",

        "ref": "",

        "icon": "Generic-GCP.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "Cloud Mobile App",

        "ref": "https://www.ibm.com/cloud-computing/bluemix/mobile?lnk=mn",

        "icon": "ibmcloud.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "Mobile & Chatbots",

        "ref": "https://cloud.oracle.com/en_US/mobile/features",

        "icon": "oracle.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Mobile Services",

      "ref": ""

    },

    "service": {

      "name": "Web API Management Service",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon API Gateway",

        "ref": "",

        "icon": "Application-Services_AmazonAPIGateway.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure API Management",

        "ref": "",

        "icon": "Azure API Management.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Cloud Endpoints",

        "ref": "",

        "icon": "Cloud-Endpoints.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "API Connect",

        "ref": "https://console.ng.bluemix.net/catalog/services/api-connect/",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "API Platform",

        "ref": "https://cloud.oracle.com/en_US/api-platform",

        "icon": "APIManager.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "API Gateway",

        "ref": "https://www.alibabacloud.com/product/api-gateway",

        "icon": "API.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Mobile Services",

      "ref": ""

    },

    "service": {

      "name": "Web/Mobile Authentication Services",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon Cognito",

        "ref": "",

        "icon": "Mobile-Services_AmazonCognito.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Mobile SDK,Offline/Sync",

        "ref": "",

        "icon": "Azure SDK.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Firebase Authentication",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "Mobile Cloud Service",

        "ref": "https://cloud.oracle.com/mobile",

        "icon": "mobile.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Mobile Services",

      "ref": ""

    },

    "service": {

      "name": "Consolidated Mgmt of Multiple Cloud Accounts",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon Pinpoint",

        "ref": "",

        "icon": "aws.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Mobile Engagement",

        "ref": "",

        "icon": "Azure Mobile Engagement.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Mobile Services",

      "ref": ""

    },

    "service": {

      "name": "Mobile App Testing Service",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS Device Farm",

        "ref": "",

        "icon": "Mobile-Services_AWSDeviceFarm.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Xamarin Test Cloud (Front End)",

        "ref": "",

        "icon": "xamarin.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Azure DevTest Labs (Back End)",

        "ref": "",

        "icon": "Azure DevTest Labs.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Cloud Test Lab",

        "ref": "https://firebase.google.com/docs/test-lab/",

        "icon": "Generic-GCP.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Mobile Services",

      "ref": ""

    },

    "service": {

      "name": "Mobile App Software Development Toolkit",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS Mobile SDK",

        "ref": "",

        "icon": "SDKs_Android.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Mobile SDK",

        "ref": "",

        "icon": "Azure SDK.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Mobile Services",

      "ref": ""

    },

    "service": {

      "name": "Application Services",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS Step Functions",

        "ref": "",

        "icon": "aws.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Microsoft Flow",

        "ref": "",

        "icon": "Microsoft Flow.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Azure Logic Apps",

        "ref": "",

        "icon": "Azure App Service - Logic App.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Azure Functions",

        "ref": "",

        "icon": "Azure Functions.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Azure App Service WebJobs",

        "ref": "",

        "icon": "Azure WebApp - WebJobs.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "App Engine",

        "ref": "https://cloud.google.com/appengine/",

        "icon": "App-Engine.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "IBM Cloud Functions",

        "ref": "https://www.ibm.com/cloud/functions",

        "icon": "ibm-cloud-functions.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "Functions",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Mobile Services",

      "ref": ""

    },

    "service": {

      "name": "Mobile App Analytics",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon Mobile Analytics",

        "ref": "https://aws.amazon.com/mobileanalytics/",

        "icon": "aws.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Hockey App",

        "ref": "https://azure.microsoft.com/en-in/services/hockeyapp/",

        "icon": "Microsoft Flow.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Firebase Analytics",

        "ref": "https://firebase.google.com/docs/analytics/",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "Mobile Cloud Service",

        "ref": "https://cloud.oracle.com/mobile",

        "icon": "mobile.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Application Services",

      "ref": ""

    },

    "service": {

      "name": "API Management Service",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon API Gateway",

        "ref": "",

        "icon": "Application-Services_AmazonAPIGateway.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure API Management",

        "ref": "",

        "icon": "Azure API Management.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Application Services",

      "ref": ""

    },

    "service": {

      "name": "Media Transcoders",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon Elastic Transcoder",

        "ref": "",

        "icon": "Application-Services_AmazonElasticTranscoder.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Media Services",

        "ref": "",

        "icon": "Azure Media Services.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Live On Demand Streaming",

        "ref": "",

        "icon": "Azure Media Services.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Azure Media Player",

        "ref": "",

        "icon": "Azure Media Services.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Content Protection",

        "ref": "",

        "icon": "Azure Media Services.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Media Analytics",

        "ref": "",

        "icon": "Azure Media Services.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "ApsaraVideo Live",

        "ref": "https://www.alibabacloud.com/product/apsaravideo-for-live",

        "icon": "video.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Application Services",

      "ref": ""

    },

    "service": {

      "name": "Queuing Services",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon SQS",

        "ref": "",

        "icon": "Application-Services_AmazonSQS.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Service Bus queues",

        "ref": "",

        "icon": "Azure Service Bus Queues.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Queue Storage",

        "ref": "",

        "icon": "Azure Service Bus Queues.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Service Bus topics",

        "ref": "",

        "icon": "Azure Service Bus Topics.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Service Bus relay",

        "ref": "",

        "icon": "Azure Service Bus Relay.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Cloud Pub/Sub",

        "ref": "",

        "icon": "Cloud-PubSub.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "Integration",

        "ref": "https://cloud.oracle.com/integration",

        "icon": "integration.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Messaging",

        "ref": "https://cloud.oracle.com/messaging",

        "icon": "messaging.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Application Services",

      "ref": ""

    },

    "service": {

      "name": "Mobile Analytics",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon Pinpoint",

        "ref": "",

        "icon": "aws.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Mobile Engagement",

        "ref": "",

        "icon": "Azure Mobile Engagement.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "Direct Mail",

        "ref": "https://www.alibabacloud.com/product/directmail",

        "icon": "directmail.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Application Services",

      "ref": ""

    },

    "service": {

      "name": "Email Services",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon SES",

        "ref": "",

        "icon": "Application-Services_AmazonSES_email.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Application Services",

      "ref": ""

    },

    "service": {

      "name": "Notification Services",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon SNS",

        "ref": "",

        "icon": "Mobile-Services_AmazonSNS.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Notification Services",

        "ref": "",

        "icon": "Azure Notification Hubs.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "Blockchain",

        "ref": "https://console.ng.bluemix.net/catalog/services/blockchain/",

        "icon": "alibaba.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },



  {

    "category": {

      "name": "Application Services",

      "ref": ""

    },

    "service": {

      "name": "Blockchain Services",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Blockchain",

        "ref": "",

        "icon": "Azure subscription.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "Blockchain",

        "ref": "https://console.ng.bluemix.net/catalog/services/blockchain/",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "Blockchain (Coming Soon)",

        "ref": "https://cloud.oracle.com/en_US/blockchain",

        "icon": "oracle.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Application Services",

      "ref": ""

    },

    "service": {

      "name": "Chatbot",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Lex Chatbots",

        "ref": "",

        "icon": "aws.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Microsoft Chatbot",

        "ref": "",

        "icon": "Azure subscription.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Dialogflow",

        "ref": "https://dialogflow.com/",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "IBM Watson",

        "ref": "https://console.ng.bluemix.net/catalog/services/blockchain/",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "Oracle Chatbots",

        "ref": "https://cloud.oracle.com/en_US/blockchain",

        "icon": "oracle.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Business Productivity",

      "ref": ""

    },

    "service": {

      "name": "Office Document Solutions",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon WorkDocs",

        "ref": "",

        "icon": "Enterprise-Applications_AmazonWorkDocs.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Amazon WorkMail",

        "ref": "",

        "icon": "Enterprise-Applications_AmazonWorkMail.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Amazon WorkSpaces",

        "ref": "",

        "icon": "Enterprise-Applications_AmazonWorkSpaces.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Microsoft Office 365",

        "ref": "",

        "icon": "Office 365.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "G Suite",

        "ref": "",

        "icon": "GSuite.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Business Productivity",

      "ref": ""

    },

    "service": {

      "name": "Desktop Application Streaming",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon AppStream 2.0",

        "ref": "",

        "icon": "Application-Services_AmazonAppStream.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Software MarketPlace",

      "ref": ""

    },

    "service": {

      "name": "Cloud Marketplace",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS Marketplace",

        "ref": "",

        "icon": "aws.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure MarketPlace",

        "ref": "",

        "icon": "Azure Store_Marketplace.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Cloud Launcher",

        "ref": "https://cloud.google.com/launcher/",

        "icon": "Google-Cloud-Platform.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "IBM Marketplace",

        "ref": "https://www.ibm.com/bn-en/marketplace/cloud-platform",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "Oracle Cloud Market Place",

        "ref": "https://cloudmarketplace.oracle.com/marketplace/bmcs",

        "icon": "oracle.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "Alibaba Cloud Marketplace",

        "ref": "https://www.alibabacloud.com/marketplace",

        "icon": "alibaba.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Internet of Things",

      "ref": ""

    },

    "service": {

      "name": "IoT Platform",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS IoT Platform",

        "ref": "",

        "icon": "Internet-Of-Things_AWSIoT.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure IoT Platform",

        "ref": "",

        "icon": "Azure IoT Hub.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "Cloud IoT Core(Beta)",

        "ref": "https://cloud.google.com/iot-core/",

        "icon": "Google-Cloud-Platform.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "Internet of Things Platform",

        "ref": "https://console.ng.bluemix.net/catalog/services/internet-of-things-platform/",

        "icon": "ibmcloud.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "Internet of Things Cloud Service",

        "ref": "https://cloud.oracle.com/en_US/iot",

        "icon": "InternetOfThings.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "Internet of Things",

        "ref": "https://www.alibabacloud.com/solutions/IoT/",

        "icon": "iot.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Internet of Things",

      "ref": ""

    },

    "service": {

      "name": "IoT Development Solutions",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS Greengrass",

        "ref": "",

        "icon": "aws.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure IoT SDK",

        "ref": "",

        "icon": "Azure SDK.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      },

      {

        "name": "Azure IoT Edge",

        "ref": "https://azure.microsoft.com/en-us/blog/microsoft-launches-azure-iot-technical-training-developers-can-start-quickly-with-iot/",

        "icon": "Azure SDK.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Internet of Things",

      "ref": ""

    },

    "service": {

      "name": "IoT Hardware",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS IoT Button",

        "ref": "",

        "icon": "aws.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Game Development",

      "ref": ""

    },

    "service": {

      "name": "Game Development",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "Amazon Lumberyard",

        "ref": "",

        "icon": "Game-Development_AmazonGameLift.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Visual Studio",

        "ref": "",

        "icon": "Visual Studio Team Services.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  },

  {

    "category": {

      "name": "Development & Testing",

      "ref": ""

    },

    "service": {

      "name": "Development & Testing",

      "ref": "",

      "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

    },

    "aws": [

      {

        "name": "AWS Dev/Test",

        "ref": "",

        "icon": "aws.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "azure": [

      {

        "name": "Azure Dev/Test",

        "ref": "https://azure.microsoft.com/en-in/services/devtest-lab/",

        "icon": "Azure DevTest Labs.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "google": [

      {

        "name": "",

        "ref": "",

        "icon": "none.png",

        "Properties": [ "To be added", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "ibm": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "oracle": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ],

    "alibaba": [

      {

        "name": "",

        "ref": "https://#",

        "icon": "none.png",

        "Properties": [ "Yes", "To be added", "To be added", "To be added", "To be added" ]

      }

    ]

  }

];

			res.header("access-control-allow-origin", "*");
			res.send(Services);

}
exports.GetServicesData = GetServicesData;