---
layout: project
title: "RASR"
permalink: /rasr/
---
# RASR
### Based on the principle of high-level information fusion, RASR takes NOAA Doppler Weather data, and re-purposes it for meteor and entering object detection and trajectory analysis


This algorithm searches the NOAA NEXRAD Level II Doppler Radar archive for phenomena indicating meteoroid falls.  For a given set of dates, archive files from across all available radar sites are retrieved \[1] and unwrapped using the Python ARM Radar Toolkit by \[2].  Latitude/longitude/altitude data is returned for all detections.  The original problem was motivated by \[3], and was developed using the [ARES](https://ares.jsc.nasa.gov/meteorite-falls/) database.  The current algorithm uses a PyTorch convolutional neural network object detection algorithm to identify fall velocity signatures, based on the Detecto framework. Tested on Ubuntu 20.04 locally.

> \[1] Staniewicz, S., Keh, R. (2018). Maual_Input_Scraper.py. The University of Texas at Austin
>
> \[2] Helmus, J.J. & Collis, S.M., (2016). The Python ARM Radar Toolkit (Py-ART), a Library for Working with Weather Radar Data in the Python Programming Language. Journal of Open Research Software. 4(1), p.e25. DOI: http://doi.org/10.5334/jors.119
>
> \[3] Fries, M. & Fries, J., (2010). [Doppler Weather Radar as a Meteorite Recovery Tool](https://onlinelibrary.wiley.com/doi/full/10.1111/j.1945-5100.2010.01115.x) Meteoritics & Planetary Sciences 45, Nr. 9, 1476-1487. DOI: 10.1111/j.1945-5100.2010.01115.x

PI: Dr. Moriba Jah

Graduate Students: Benjamin Miller

Undergraduate Students: Robby Keh, Yash Sarda, Rodrigo Ugalde (Graduated), James Perlichek (Graduated)


### Github Repository:

<div class="github-card" data-github="ysarda/RASR" data-width="400" data-height="" data-theme="default"></div>
<script src="//cdn.jsdelivr.net/github-cards/latest/widget.js"></script>


[Recent Presentation](https://ysarda.github.io/assets/files/present.pdf)

[Initial concept paper](https://ysarda.github.io/assets/files/RASR.pdf)


<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/brassy-hallowed-bill?path=index.html&previewSize=0"
    title="brassy-hallowed-bill on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>
