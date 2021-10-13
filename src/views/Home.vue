<template>
  <div class="home">
    <img src="../assets/multimedia/b&s (5).png" alt="logo" class="logo" title="Bagher & Sadegh">
    <div class="container  math">
      <div class="row">
        <div class="tools p-2 pt-3 m-0 col-md-4 col-sm-5 col-lg-3">


          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button  collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne" aria-expanded="false"
                        aria-controls="flush-collapseOne">
                  <b>Simple mathematical</b>
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse"
                   aria-labelledby="flush-headingOne"
                   data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">

                  <button @click="getOperate('/')" class="btn m-1 btn-outline-info btn-light">
                    <font-awesome-icon icon="divide" aria-hidden="true"/>
                  </button>
                  <button @click="getOperate('*')" class="btn m-1 btn-outline-info btn-light">
                    <font-awesome-icon icon="times" aria-hidden="true"/>
                  </button>
                  <button @click="getOperate('-')" class="btn m-1 btn-outline-info btn-light">
                    <font-awesome-icon icon="minus" aria-hidden="true"/>
                  </button>
                  <button @click="getOperate('+')" class="btn m-1 btn-outline-info btn-light">
                    <font-awesome-icon icon="plus" aria-hidden="true"/>
                  </button>
                  <button @click="getOperate('%')" class="btn m-1 btn-outline-info btn-light">
                    <font-awesome-icon icon="percent" aria-hidden="true"/>
                  </button>
                  <button @click="equal" class="btn m-1 btn-outline-info btn-light">
                    <font-awesome-icon icon="equals" aria-hidden="true"/>
                  </button>
                  <button @click="deleteJustOne" class="btn m-1 btn-outline-info btn-light">
                    <font-awesome-icon icon="backspace" aria-hidden="true"/>
                  </button>
                  <button @click="deleteAll" class="btn m-1 btn-outline-info btn-light">
                    <font-awesome-icon icon="eraser" aria-hidden="true"/>
                  </button>

                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo" aria-expanded="false"
                        aria-controls="flush-collapseTwo">
                  <b>Mathematical geometric</b>
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse"
                   aria-labelledby="flush-headingTwo"
                   data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">


                  <button @click="showModal = true,figure_type_selector('square')" title="area square"
                          class="btn m-1 btn-outline-info btn-light">
                    <svg width="20" height="20" class="area-square">
                      <rect width="20" height="20"
                            style="fill:#f8f9fa;stroke-width:3;stroke:#0dcaf0"></rect>
                      Sorry, your browser does not support inline SVG.
                    </svg>
                  </button>
                  <button @click="showModal = true,figure_type_selector('rectagle')"
                          title="area rectangle"
                          class="btn m-1 btn-outline-info btn-light">
                    <svg width="30" height="20" class="area-rectangle">
                      <rect width="30" height="20"
                            style="fill:#f8f9fa;stroke-width:3;stroke:#0dcaf0"></rect>
                      Sorry, your browser does not support inline SVG.
                    </svg>
                  </button>
                  <button @click="showModal = true,figure_type_selector('triangle')"
                          title="area triangle"
                          class="btn m-1 btn-outline-info btn-light">
                    <svg height="20" width="20">
                      <polygon points="10,0 0,19 19,19"
                               style="fill:#f8f9fa;stroke-width:2;stroke:#0dcaf0"></polygon>
                      Sorry, your browser does not support inline SVG.
                    </svg>
                  </button>
                  <button @click="showModal = true,figure_type_selector('circle')" title="area circle"
                          class="btn m-1 btn-outline-info btn-light">
                    <svg height="20" width="20">
                      <circle cx="10" cy="10" r="9"
                              style="fill:#f8f9fa;stroke-width:2;stroke:#0dcaf0"></circle>
                    </svg>
                  </button>
                  <button @click="showModal = true,figure_type_selector('regular_polygon')"
                          title="area regular polygon"
                          class="btn m-1 btn-outline-info btn-light">
                    <svg height="20" width="20">
                      <polygon points="5,0  19, 0  14, 20  0, 20"
                               style="fill:#f8f9fa;stroke-width:2;stroke:#0dcaf0"></polygon>
                      Sorry, your browser does not support inline SVG.
                    </svg>
                  </button>
                  <button @click="showModal = true,figure_type_selector('unregular_polygon')"
                          title="area irregular_polygon"
                          class="btn m-1 btn-outline-info btn-light">
                    <svg height="20" width="20">
                      <polygon points="5,0  19, 0  14, 20  0, 10"
                               style="fill:#f8f9fa;stroke-width:2;stroke:#0dcaf0"></polygon>
                      Sorry, your browser does not support inline SVG.
                    </svg>
                  </button>
                  <button @click="showModal = true,figure_type_selector('area_square')"
                          title="area square"
                          class="btn m-1 btn-outline-info btn-light">
                    <svg width="20" height="20" class="area-square">
                      <rect width="20" height="20"
                            style="fill:#f8f9fa;stroke-width:3;stroke:#0dcaf0"></rect>
                      Sorry, your browser does not support inline SVG.
                    </svg>
                  </button>
                  <button @click="showModal = true,figure_type_selector('area_rectagle')"
                          title="area square"
                          class="btn m-1 btn-outline-info btn-light">
                    <svg width="20" height="20" class="area-square">
                      <rect width="20" height="20"
                            style="fill:#f8f9fa;stroke-width:3;stroke:#0dcaf0"></rect>
                      Sorry, your browser does not support inline SVG.
                    </svg>
                  </button>
                  <button @click="showModal = true,figure_type_selector('area_triangle')"
                          title="area square"
                          class="btn m-1 btn-outline-info btn-light">
                    <svg width="20" height="20" class="area-square">
                      <rect width="20" height="20"
                            style="fill:#f8f9fa;stroke-width:3;stroke:#0dcaf0"></rect>
                      Sorry, your browser does not support inline SVG.
                    </svg>
                  </button>
                  <button @click="showModal = true,figure_type_selector('area_parallelogram')"
                          title="area square"
                          class="btn m-1 btn-outline-info btn-light">
                    <svg width="20" height="20" class="area-square">
                      <rect width="20" height="20"
                            style="fill:#f8f9fa;stroke-width:3;stroke:#0dcaf0"></rect>
                      Sorry, your browser does not support inline SVG.
                    </svg>
                  </button>
                  <button @click="showModal = true,figure_type_selector('area_trapezius')"
                          title="area square"
                          class="btn m-1 btn-outline-info btn-light">
                    <svg width="20" height="20" class="area-square">
                      <rect width="20" height="20"
                            style="fill:#f8f9fa;stroke-width:3;stroke:#0dcaf0"></rect>
                      Sorry, your browser does not support inline SVG.
                    </svg>
                  </button>
                  <button @click="showModal = true,figure_type_selector('area_circle')"
                          title="area square"
                          class="btn m-1 btn-outline-info btn-light">
                    <svg width="20" height="20" class="area-square">
                      <rect width="20" height="20"
                            style="fill:#f8f9fa;stroke-width:3;stroke:#0dcaf0"></rect>
                      Sorry, your browser does not support inline SVG.
                    </svg>
                  </button>
                  <button @click="showModal = true,figure_type_selector('area_oval')"
                          title="area square"
                          class="btn m-1 btn-outline-info btn-light">
                    <svg width="20" height="20" class="area-square">
                      <rect width="20" height="20"
                            style="fill:#f8f9fa;stroke-width:3;stroke:#0dcaf0"></rect>
                      Sorry, your browser does not support inline SVG.
                    </svg>
                  </button>
                  <button @click="showModal = true,figure_type_selector('area_cube')"
                          title="area square"
                          class="btn m-1 btn-outline-info btn-light">
                    <svg width="20" height="20" class="area-square">
                      <rect width="20" height="20"
                            style="fill:#f8f9fa;stroke-width:3;stroke:#0dcaf0"></rect>
                      Sorry, your browser does not support inline SVG.
                    </svg>
                  </button>
                  <button @click="showModal = true,figure_type_selector('area_rectangular_cube')"
                          title="area square"
                          class="btn m-1 btn-outline-info btn-light">
                    <svg width="20" height="20" class="area-square">
                      <rect width="20" height="20"
                            style="fill:#f8f9fa;stroke-width:3;stroke:#0dcaf0"></rect>
                      Sorry, your browser does not support inline SVG.
                    </svg>
                  </button>
                  <button @click="showModal = true,figure_type_selector('area_diamond')"
                          title="area square"
                          class="btn m-1 btn-outline-info btn-light">
                    <svg width="20" height="20" class="area-square">
                      <rect width="20" height="20"
                            style="fill:#f8f9fa;stroke-width:3;stroke:#0dcaf0"></rect>
                      Sorry, your browser does not support inline SVG.
                    </svg>
                  </button>
                  <button @click="showModal = true,figure_type_selector('area_Cylindrical')"
                          title="area square"
                          class="btn m-1 btn-outline-info btn-light">
                    <svg width="20" height="20" class="area-square">
                      <rect width="20" height="20"
                            style="fill:#f8f9fa;stroke-width:3;stroke:#0dcaf0"></rect>
                      Sorry, your browser does not support inline SVG.
                    </svg>
                  </button>
                  <button @click="showModal = true,figure_type_selector('area_pyramid')"
                          title="area square"
                          class="btn m-1 btn-outline-info btn-light">
                    <svg width="20" height="20" class="area-square">
                      <rect width="20" height="20"
                            style="fill:#f8f9fa;stroke-width:3;stroke:#0dcaf0"></rect>
                      Sorry, your browser does not support inline SVG.
                    </svg>
                  </button>
                  <button @click="showModal = true,figure_type_selector('area_cone')"
                          title="area square"
                          class="btn m-1 btn-outline-info btn-light">
                    <svg width="20" height="20" class="area-square">
                      <rect width="20" height="20"
                            style="fill:#f8f9fa;stroke-width:3;stroke:#0dcaf0"></rect>
                      Sorry, your browser does not support inline SVG.
                    </svg>
                  </button>
                  <button @click="showModal = true,figure_type_selector('area_sphere')"
                          title="area square"
                          class="btn m-1 btn-outline-info btn-light">
                    <svg width="20" height="20" class="area-square">
                      <rect width="20" height="20"
                            style="fill:#f8f9fa;stroke-width:3;stroke:#0dcaf0"></rect>
                      Sorry, your browser does not support inline SVG.
                    </svg>
                  </button>
                  <button @click="showModal = true,figure_type_selector('area_el_sphere')"
                          title="area square"
                          class="btn m-1 btn-outline-info btn-light">
                    <svg width="20" height="20" class="area-square">
                      <rect width="20" height="20"
                            style="fill:#f8f9fa;stroke-width:3;stroke:#0dcaf0"></rect>
                      Sorry, your browser does not support inline SVG.
                    </svg>
                  </button>
                  <button @click="showModal = true,figure_type_selector('no_figure')"
                          title="area square"
                          class="btn m-1 btn-outline-info btn-light">
                    <svg width="20" height="20" class="area-square">
                      <rect width="20" height="20"
                            style="fill:#f8f9fa;stroke-width:3;stroke:#0dcaf0"></rect>
                      Sorry, your browser does not support inline SVG.
                    </svg>
                  </button>


                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree" aria-expanded="false"
                        aria-controls="flush-collapseThree">
                  فرمول های جانبی
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse collapse"
                   aria-labelledby="flush-headingThree"
                   data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <button class="btn m-1 btn-outline-info btn-light"
                          @click="showModal = true,figure_type_selector('QuadraticEquation')">Quadratic Equation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="col-lg-9 col-md-8 col-sm-7  p-0 m-0">
          <div class="input">
                        <textarea v-model="inputNum" @keyup.enter="equal" class="textarea"
                                  placeholder="enter your text..."></textarea>
          </div>
          <div class="box-output">
            <label class="output">output : <span v-for="item in answer">
                            {{ item }} ,
                        </span>


            </label>
            <button class="btn btn-light  btn-lg btn-outline-info pb-3  copy">copy</button>
          </div>
        </div>
      </div>

    </div>
    <div class="overlay" v-if="showModal" @click="showModal = false"></div>

    <!-- modal -->
    <div class="modal" v-if="showModal">
      <button class="close btn-close" @click="showModal = false"></button>
      <h3> Area {{ figure_type }}</h3>
      <hr>

      <!--  QuadraticEquation -->
      <QuadraticEquation v-if="figure_type === 'QuadraticEquation'"/>

      <!--       Square        -->

      <div v-if="figure_type==='square'">
        <Shapes shapeName="square" :edge1="figure_size.width"/>
        <br>
        <label>enter Width:</label>
        <br>
        <input v-model="figure_size.width" min="1">
      </div>

      <!--       rectangle     -->
      <div v-if="figure_type==='rectagle'">
        <Shapes shapeName="rectangle" :edge1="figure_size.width" :edge2="figure_size.length"/>
        <br>
        <label>enter value:</label>
        <br>
        Width : <input v-model="figure_size.width" min="1">
        length : <input v-model="figure_size.length" min="1">
      </div>

      <!--       triangle     -->
      <div v-if="figure_type==='triangle'">
        <Shapes shapeName="triangle" :edge1="figure_size.multiWidth[0]" :edge2="figure_size.multiWidth[1]"
                :edge3="figure_size.multiWidth[2]"/>
        <br>
        <label>enter values:</label>
        <br>
        edge a : <input v-model="figure_size.multiWidth[0]" min="1">
        edge b : <input v-model="figure_size.multiWidth[1]" min="1">
        edge c : <input v-model="figure_size.multiWidth[2]" min="1">
      </div>

      <!--       circle      -->
      <div v-if="figure_type==='circle'">
        <Shapes shapeName="circle" :radius="figure_size.radius"/>
        <br>
        <label>enter radius:</label>
        <br>
        <input v-model="figure_size.radius" min="1">
      </div>

      <!--       unregular_polygon      -->
      <div v-if="figure_type==='unregular_polygon'">
        <br>
        <label>enter Widths:</label>
        <br>
        <input v-model="figure_size.multiWidth[0]" min="1">
        <input v-model="figure_size.multiWidth[1]" min="1">
        <input v-model="figure_size.multiWidth[2]" min="1">
        <input v-model="figure_size.multiWidth[3]" min="1">
      </div>

      <!--       regular_polygon     -->
      <div v-if="figure_type==='regular_polygon'">
<!--        <Shapes shapeName="regular_polygon" :edge1="figure_size.width" :edge2="figure_size.number_width"/>-->
        <br>
        <label>enter values:</label>
        <br>
        Width : <input v-model="figure_size.width" min="1">
        Number : <input v-model="figure_size.number_width" min="1">
      </div>


      <!--            areas   -->
      <!--       Squre        -->

      <div v-if="figure_type==='area_square'">
        <label>enter Width:</label>
        <br>
        <input v-model="figure_size.width" min="1">
      </div>


      <!--       rectagle        -->

      <div v-if="figure_type==='area_rectagle'">
        <label>enter width & length:</label>
        <br>
        <input v-model="figure_size.width" min="1">
        <input v-model="figure_size.length" min="1">
      </div>


      <!--      triangle        -->


      <div v-if="figure_type==='area_triangle'">
        <label>enter Width & height:</label>
        <br>
        <input v-model="figure_size.width" min="1">
        <input v-model="figure_size.height" min="1">
      </div>


      <!--      parallelogram        -->

      <div v-if="figure_type==='area_parallelogram'">
        <label>enter Width:</label>
        <br>
        <input v-model="figure_size.width" min="1">
        <input v-model="figure_size.height" min="1">
      </div>


      <!--      trapezius        -->

      <div v-if="figure_type==='area_trapezius'">
        <label>enter Widths & height:</label>
        <br>
        <input v-model="figure_size.small_width" min="1">
        <input v-model="figure_size.large_width" min="1">
        <input v-model="figure_size.height" min="1">
      </div>


      <!--       circle        -->

      <div v-if="figure_type==='area_circle'">
        <label>enter radius:</label>
        <br>
        <input v-model="figure_size.radius" min="1">
      </div>


      <!--       oval        -->

      <div v-if="figure_type==='area_oval'">
        <label>enter Widths:</label>
        <br>
        <input v-model="figure_size.multiWidth[1]" min="1">
        <input v-model="figure_size.multiWidth[0]" min="1">
      </div>


      <!--      cube        -->

      <div v-if="figure_type==='area_cube'">
        <label>enter Width:</label>
        <br>
        <input v-model="figure_size.width" min="1">
      </div>


      <!--      rectangular_cube        -->

      <div v-if="figure_type==='area_rectangular_cube'">
        <label>enter Widths:</label>
        <br>
        <input v-model="figure_size.multiWidth[0]" min="1">
        <input v-model="figure_size.multiWidth[1]" min="1">
        <input v-model="figure_size.multiWidth[2]" min="1">
      </div>


      <!--       diamond        -->

      <div v-if="figure_type==='area_diamond'">
        <label>enter Width & height:</label>
        <br>
        <input v-model="figure_size.width" min="1">
        <input v-model="figure_size.height" min="1">
      </div>

      <!--      Cylindrical        -->

      <div v-if="figure_type==='area_Cylindrical'">
        <label>enter radius:</label>
        <br>
        <input v-model="figure_size.radius" min="1">
      </div>

      <!--       pyramid        -->

      <div v-if="figure_type==='are_pyramid'">
        <label>enter Width:</label>
        <br>
        <input v-model="figure_size.width" min="1">
      </div>

      <!--       cone        -->

      <div v-if="figure_type==='area_cone'">
        <label>enter Width & length:</label>
        <br>
        <input v-model="figure_size.radius" min="1">
        <input v-model="figure_size.length" min="1">
      </div>

      <!--       sphere        -->

      <div v-if="figure_type==='area_sphere'">
        <label>enter radius:</label>
        <br>
        <input v-model="figure_size.radius" min="1">
      </div>

      <!--       el_sphere        -->

      <div v-if="figure_type==='area_el_sphere'">
        <label>enter Width & height:</label>
        <br>
        <input v-model="figure_size.radius" min="1">
        <input v-model="figure_size.height" min="1">
      </div>

      <div v-if="figure_type==='no_figure'">

        <label v-if="al_equations.degree==='first-order'">Ax + Bx = C</label>
        <label v-if="al_equations.degree==='second-order'">Ax^2 + Bx + C = D</label>
        A:<input v-model="al_equations.A_variable" min="1">
        <br>
        B:<input v-model="al_equations.B_variable" min="1">
        <br>
        C:<input v-model="al_equations.C_variable" min="1">
        <br>
        D:<input v-if="al_equations.degree==='second-order'" v-model="al_equations.D_variable" min="1">
      </div>


      <button @click="perimeter_area" class="btn btn-light  btn-lg btn-outline-info"
              :class="{'displayNone':figure_type === 'QuadraticEquation'}"
              type="submit">
        submit
      </button>
      <br>
      <label v-if="temp!==0" style="font-weight: bold;">Answer: {{ temp }}</label>
    </div>
  </div>
</template>

<script>

import QuadraticEquation from "./QuadraticEquation";
import Shapes from "../components/Shapes";

export default {
  name: 'Home',
  data() {
    return {

      inputNum: "",
      answer: [],
      temp: 0,
      showModal: false,
      // side_square: "",
      figure_type: '',
      al_equations: {
        delta: null,
        degree: '',
        A_variable: 0,
        B_variable: 0,
        C_variable: 0,
        D_variable: 0,

        root_1: null,
        root_2: null,


      },
      figure_size: {
        height: '',//ارتفاع
        width: '',//عرض
        number_width: '',
        length: '',//طول
        radius: '',//شعاع
        large_width: '',
        small_width: '',
        multiWidth: []//برای اشکالی که بیشتر از دو یا چند قاعده دارند
      }
    }
  },
  methods: {


    perimeter_area() {

      if (this.figure_type === 'square') {
        this.temp = parseFloat(this.figure_size.width * 4);
        this.answer.push(this.temp)
      }
      if (this.figure_type === 'rectagle') {
        this.temp = parseFloat(this.figure_size.width) * 2 + parseFloat(this.figure_size.length) * 2;
        this.answer.push(this.temp)
      }
      if (this.figure_type === 'triangle') {
        this.temp = parseFloat(this.figure_size.multiWidth[0]) +
            parseFloat(this.figure_size.multiWidth[2]) +
            parseFloat(this.figure_size.multiWidth[1]);
        this.answer.push(this.temp)
      }
      if (this.figure_type === 'unregular_polygon') {
        this.temp = parseFloat(this.figure_size.multiWidth[0]) +
            parseFloat(this.figure_size.multiWidth[1]) +
            parseFloat(this.figure_size.multiWidth[2]) +
            parseFloat(this.figure_size.multiWidth[3]);
        this.answer.push(this.temp)
      }
      if (this.figure_type === 'circle') {
        this.temp = 2 * parseFloat(this.figure_size.radius) * Math.PI;
        this.answer.push(this.temp)
      }
      if (this.figure_type === 'regular_polygon') {
        this.temp = parseInt(this.figure_size.number_width) * parseFloat(this.figure_size.width);
        this.answer.push(this.temp)
      }
      if (this.figure_type === 'area_square') {
        this.temp = math.pow(parseFloat(this.figure_size.width), 2);
        this.answer.push(this.temp)
      }
      if (this.figure_type === 'area_rectagle') {
        this.temp = parseFloat(this.figure_size.width) * parseFloat(this.figure_size.length);
        this.answer.push(this.temp)
      }
      if (this.figure_type === 'area_triangle') {
        this.temp = (parseFloat(this.figure_size.width) * parseFloat(this.figure_size.height)) / 2;
        this.answer.push(this.temp)
      }
      if (this.figure_type === 'area_parallelogram') {
        this.temp = parseFloat(this.figure_size.width) * parseFloat(this.figure_size.height);
        this.answer.push(this.temp)
      }
      if (this.figure_type === 'area_trapezius') {
        this.temp = ((parseFloat(this.figure_size.small_width) + parseFloat(this.figure_size.large_width))
            * parseFloat(this.figure_size.height)) / 2;
        this.answer.push(this.temp)
      }
      if (this.figure_type === 'area_circle') {
        this.temp = math.pow(parseFloat(this.figure_size.radius), 2) * math.PI;
        this.answer.push(this.temp)
      }
      if (this.figure_type === 'area_oval') {
        this.temp = parseFloat(this.figure_size.multiWidth[1]) * parseFloat(this.figure_size.multiWidth[0]) * math.PI;
        this.answer.push(this.temp)
      }
      if (this.figure_type === 'area_cube') {
        this.temp = math.pow(parseFloat(this.figure_size.width), 2) * 6;
        this.answer.push(this.temp)
      }
      if (this.figure_type === 'area_rectangular_cube') {
        this.temp = 2 * (parseFloat(this.figure_size.multiWidth[0]) * parseFloat(this.figure_size.multiWidth[1])) +
            2 * (parseFloat(this.figure_size.multiWidth[0]) * parseFloat(this.figure_size.multiWidth[2])) +
            2 * (parseFloat(this.figure_size.multiWidth[2]) * parseFloat(this.figure_size.multiWidth[1]));
        this.answer.push(this.temp)
      }
      if (this.figure_type === 'area_diamond') {
        this.temp = parseFloat(this.figure_size.width) * parseFloat(this.figure_size.height);
        this.answer.push(this.temp)
      }
      if (this.figure_type === 'area_Cylindrical') {
        let perimeter = 2 * parseFloat(this.figure_size.radius) * math.PI;
        this.temp = perimeter * parseFloat(this.figure_size.length) +
            2 * (math.pow(parseFloat(this.figure_size.radius), 2) * math.PI);
        this.answer.push(this.temp)
      }
      if (this.figure_type === 'area_pyramid') {
        let perimeter = parseFloat(this.figure_size.width * 4);
        this.temp = (parseFloat(this.figure_size.width) * perimeter) / 2 + math.pow(parseFloat(this.figure_size.width), 2);
        this.answer.push(this.temp)
      }
      if (this.figure_type === 'area_cone') {
        this.temp = parseFloat(this.figure_size.radius) * parseFloat(this.figure_size.length) * Math.PI
            + math.pow(parseFloat(this.figure_size.radius), 2) * Math.PI;
        this.answer.push(this.temp)
      }
      if (this.figure_type === 'area_sphere') {
        this.temp = Math.pow(parseFloat(this.figure_size.radius), 2) * Math.PI * 4;
        this.answer.push(this.temp)
      }
      if (this.figure_type === 'area_el_sphere') {
        this.temp = parseFloat(this.figure_size.radius) * parseFloat(this.figure_size.height) * Math.PI * 4;
        this.answer.push(this.temp)
      }


    },


    figure_type_selector(f_type) {

      this.figure_type = f_type;
      console.log(this.figure_type)
    },


    getOperate(element) {
      if (this.inputNum.charAt(0) === "0") {
        this.inputNum = ""
      }
      // if (this.inputNum.length < 9) {
      this.inputNum += element;

      // } else {}
    },
    square() {
      eval(this.inputNum) < 0 ? this.answer = "Can not suqre the negative value"
          : this.answer.push(Math.sqrt(eval(this.inputNum)));
    },


    equal() {
      if (this.answer.length < 10) {
        this.answer.push(eval(this.inputNum));
        console.log(this.answer)
      } else {
        this.answer = []
      }


    },


    deleteAll() {
      this.inputNum = "";
      this.answer = [];
      console.log(this.answer)

    },


    deleteJustOne() {
      this.inputNum = this.inputNum.slice(0, -1);
    },
  },

  components: {Shapes, QuadraticEquation}
}
</script>
<style lang="scss" scoped>
.home {
  height: 100vh;
  direction: ltr;
  text-align: left;
  position: relative;

  .logo {
    position: absolute;
    background-color: transparent;
    left: 20px;
    top: 10px;
    width: 100px;
    height: 100px;
    // box-shadow: 1px 1px 3px 1px rgba(138, 58, 58, 0.582);
    opacity: 0.9;

    &:hover {
      width: 110px;
      height: 110px;
      box-shadow: 1px 1px 5px 2px rgba(138, 58, 58, 0.877);
      border-radius: 50%;
      opacity: 1;
    }
  }

  .math {
    transform: translate(5%, 11%);

    .tools {
      background-color: white;
      border-radius: 15px;
      border-color: rgb(66, 60, 49);
      border-width: 1px !important;
      box-shadow: 1px 1px 3px 1px rgba(20, 158, 151, 0.445);

      .accordion-body {
        max-height: 350px;
        overflow-y: scroll;
        list-style: none;
        padding: 5px;
        margin: 0px;

        .btn {
          text-align: center !important;

          .area-square {
            display: block;
            margin: auto;
          }

          &:hover svg rect {
            box-shadow: 1px 1px 2px 1px #0d7180af;
            color: white !important;
            stroke: #fffdfe !important;
            fill: #0dcaf0 !important;;
          }

          &:hover svg polygon {
            box-shadow: 1px 1px 2px 1px #0d7180af;
            color: white !important;
            stroke: #fffdfe !important;
            fill: #0dcaf0 !important;;
          }

          &:hover svg circle {
            box-shadow: 1px 1px 2px 1px #0d7180af;
            color: white !important;
            stroke: #fffdfe !important;
            fill: #0dcaf0 !important;;
          }
        }
      }
    }

    .input {
      .textarea {
        margin: 5px;
        padding: 25px;
        background-color: whitesmoke;
        width: 90%;
        min-height: 300px;
        max-height: 333px;
        border-radius: 8px;
        border-width: 2px;
        border-color: rgba(0, 110, 255, 0.637);
        border-end-end-radius: 5px;
        color: black;
        font-size: 16px;
        font-family: 'Times New Roman', Times, serif, Georgia, 'Times New Roman', Times, serif;

        &:hover {
          font-size: 17px;
          box-shadow: 1px 1px 5px 1px rgba(0, 110, 255, 0.637);
          border-color: rgba(0, 0, 255, 0.685);
          cursor: pointer;
        }

        &:focus {
          font-size: 20px;
          box-shadow: 1px 1px 2px 1px rgba(0, 110, 255, 0.637);
          background: white;
          border-color: blue;
          outline: none;
          cursor: text;
          overflow-y: scroll;
        }
      }
    }

    .box-output {
      position: relative;

      .output {
        border-style: solid;
        border-color: rgba(78, 180, 138, 0.959);
        border-width: 2px;
        margin: 5px;
        padding: 30px;
        background-color: rgba(164, 223, 198, 0.774);
        width: 89.7%;
        height: 300px;
        border-radius: 8px;
        color: black;
        font-size: 18px;
        font-weight: 700;
        font-family: 'Times New Roman', Times, serif, Georgia, 'Times New Roman', Times, serif;
        font-size: 17px;
        box-shadow: 2px 2px 5px 2px rgb(107, 129, 120);
      }

      .copy {
        position: absolute;
        right: 120px;
        bottom: 25px;
        text-align: center;

        &:hover {
          box-shadow: 1px 1px 2px 1px #0d7180af;
          color: white !important;
        }
      }
    }
  }
}

.displayNone {
  display: none !important;
}

.overlay {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
}

.modal {
  position: absolute;
  left: 40%;
  top: 20%;
  width: 400px;
  height: auto;
  z-index: 9999;
  border-radius: 15px;

  margin: 0 auto;
  padding: 20px 30px;
  display: block !important;
  background-color: #97d7d0;

  label {

    font-family: 'Times New Roman', Times, serif, Georgia, 'Times New Roman', Times, serif;
    font-weight: 500;
    font-size: 19px;
  }


  h3 {
    font-family: 'Times New Roman', Times, serif, Georgia, 'Times New Roman', Times, serif;
    display: inline-block;

  }

  input {
    border-radius: 5px;
    background-color: #2d47fa;
    color: #fffdfe;
    outline: none;
    margin: 3.5px;
    height: 43px;
    width: 250px;

    &:focus {
      background-color: #202b91;
      color: #fffdfe;
      outline: none;
    }

  }

  button {
    display: block;
    margin-top: 20px;
  }

}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
}

::-webkit-scrollbar {
  width: 5px;
}

/* Track */

::-webkit-scrollbar-track {
  background: none;
}

/* Handle */

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 255, 0.685);
}

/* Handle on hover */

::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 255, 0.685);
}


</style>
