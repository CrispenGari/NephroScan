### NephroScan

🫘🫁NephroScan is an AI-powered kidney stone detection system that uses deep learning models `ResNet50`, `MobileNetV3`, and `DenseNet201` to analyze kidneys for the presence of stones. The backend server processes medical images and returns detection results via a REST API, seamlessly integrated into a mobile application for real-time diagnostics.

> This repository contains two main sub directory which are:

1. `mobile` - The mobile app that does predictions by sending requests to the API server using images of a human kidneys.
2. `server` - This is an API server that serves different models that does Kidney Stone detection based on on an image of a kidney.

<p align="center">
  <a href="https://github.com/crispengari/NephroScan/actions/workflows/ci.yml">
    <img src="https://github.com/crispengari/NephroScan/actions/workflows/ci.yml/badge.svg" alt="CI Status">
  </a>
   <a href="https://github.com/crispengari/NephroScan/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License: MIT">
  </a>
  <a href="https://typescriptlang.org/">
    <img src="https://img.shields.io/badge/language-typescript-blue.svg" alt="Language: TypeScript">
  </a>
  <a href="https://www.python.org/">
    <img src="https://img.shields.io/badge/language-python-blue.svg" alt="Language: Python">
  </a>
</p>

### App Functionalities

1. 🔒 **Local Authentication**
2. 🩻 **Kidney Stone Detection**
3. 📸 **Image Capture from Camera or Gallery**
4. 💾 **Image Storage & Retrieval from Local Filesystem**
5. 🖼️ **Image Viewer with Zoom and Pan Support**
6. 📊 **Prediction Result Display with Confidence Score**
7. 📂 **Data Persistence for Previous Scans**
8. 📤 **Sharing and Exporting Results**

### APP UI

This application is a native app that supports all devices `iOS` and `Android`. This sections presents the of the UI components of this app.

#### Landing Page

- This page presents the landing page of the app when you use the app for the first time allowing you to view the Terms and conditions of the app and privacy policy of the app, which can also be viewed in the settings page.

<p align="center">
<img src='/images/0.jpeg' alt="ios" width="200"/>
<img src='/images/1.jpeg' alt="ios" width="200"/>
<img src='/images/11.jpeg' alt="ios" width="200"/>
</p>

#### Settings Page

<p align="center">
<img src='/images/2.jpeg' alt="android" width="200"/>
<img src='/images/3.jpeg' alt="android" width="200"/>
</p>

#### Other Screens

<p align="center">
<img src='/images/7.jpeg' alt="android" width="200"/>
<img src='/images/8.jpeg' alt="android" width="200"/>
<img src='/images/9.jpeg' alt="android" width="200"/>
<img src='/images/10.jpeg' alt="android" width="200"/>
</p>

#### Results

- The diagonosis results are presented in their own screen. Below are the for the UI.

<p align="center">
<img src='/images/4.jpeg' alt="android" width="200"/>
<img src='/images/5.jpeg' alt="android" width="200"/>
<img src='/images/6.jpeg' alt="android" width="200"/>
</p>

### Notebooks

The notebooks that were used to train the models can be found in this folder [`09_KIDNEY_STONE_DETECTION`](https://github.com/CrispenGari/cv-torch/tree/main/09_KIDNEY_STONE_DETECTION).

### LICENSE

This project is using the [`MIT`](/LICENSE) LICENSE which reads as follows:
