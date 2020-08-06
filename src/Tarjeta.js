
import React, { Component } from 'react';


export default class Tarjeta extends Component {
    
    render() {
      return(
        
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src="https://spoiler.bolavip.com/__export/1595949727183/sites/bolavip/img/2020/07/28/stranger_things_cuarta_temporada_estreno_datos_claves_crop1595949726594.jpg_423682103.jpg" alt="Sunset in the mountains"/>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2" id="nombrepe">Stranger Things</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 py-4">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
          </div>
        </div>

      )
    }
  }


