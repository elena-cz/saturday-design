---
path: /projects/quetzal-translate
order: 1
date: 2020-02-12T17:17:11.388Z
title: Quetzal Translate
thumbnail: /assets/thumbnail-quetzal.png
urlText: quetzal.app
url: 'https://quetzal.app'
description: >-
  Built offline-optimized translation app (PWA) to help care providers
  communicate with clients in their local language
role: 'Developer, Designer'
frontend: >-
  Vue, Vuex, Web Workers, IndexedDB, Cache Storage, Sass, Vuetify, HTML5 Audio
  (Howler.js), Google Analytics
backend: 'Firebase (Firestore, Cloud Functions, Auth, Storage)'
---
###### key features

* Download offline audio per language
  * Web Worker saves audio to Cache Storage, reducing main thread work
  * Notifies users when updates available & efficiently updates only the items that changed (using IndexedDB to track status)
  * Users can delete a language's cache at any time
* Offline-capable PWA (Progressive Web App) with a responsive design for mobile, desktop, and everything in between
* Implemented [Material Design's Backdrop spec](https://material.io/components/backdrop) with smooth animations and extensible design
* Easy-to-use admin pages for managing translations and uploading audio recordings


[[image]]
| ![Translation & Backdrop Screenshots](/assets/hero_backdrop-optimized.png "Translation & Backdrop")

> Translation & Backdrop

[[image]]
| ![Offline Promo & Download Flow Screenshots](/assets/offlinepromo_flow-optimized.png "Offline Promo & Download Flow")

> Offline Promo & Download Flow

[[imageOutline]]
| ![Admin Page Example Screenshot](/assets/quetzal.app_admin-optimized.png "Admin Page Example")

> Admin Page Example
