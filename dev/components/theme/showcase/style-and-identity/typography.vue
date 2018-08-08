<template>
  <u-page padding>
    <p class="caption">Headings</p>
    <div v-for="heading in headings" :key="heading.class" class="row items-center m-b-lg">
      <div class="col-sm-3 col-12">
        <u-chip color="primary" square>.{{ heading.class }}</u-chip>
        <u-chip color="secondary" square v-if="heading.equivalent">{{ heading.equivalent }}</u-chip>
      </div>
      <div class="col-sm-9 col-12 u-pl-md u-pt-md">
        <div class="m-b-md" :class="[heading.class, `${heading.class}-opacity`]">{{ heading.label }}</div>
        <div class="text-weight-light">
          black <strong>{{ heading.color }}%</strong>, font weight <strong>{{ heading.weight }}</strong>
        </div>
      </div>
    </div>

    <p class="caption">Weights</p>
    <div v-for="weight in weights" :key="weight" class="row items-center m-b-md">
      <div class="col-sm-3 col-12">
        <u-chip color="primary" square>.text-weight-{{ weight }}</u-chip>
      </div>
      <div class="col-sm-9 col-12 m-b-none u-pl-md u-pt-sm u-pb-sm">
        <div :class="`text-weight-${weight}`"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
      </div>
    </div>

    <p class="caption">Blockquotes</p>
    <blockquote>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <small>Someone famous for <cite title="Uloc Framework">Uloc Framework</cite></small>
    </blockquote>

    <blockquote class="text-right">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <small>Someone famous for <cite title="Uloc Framework">Uloc Framework</cite></small>
    </blockquote>

    <p class="caption">Definition Lists - Vertical</p>
    <dl>
      <dt>Description lists</dt>
      <dd>A description list is perfect for defining terms.</dd>
      <dt>Euismod</dt>
      <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
      <dd>Donec id elit non mi porta gravida at eget metus.</dd>
      <dt>Malesuada porta</dt>
      <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
    </dl>

    <p class="caption">Definition Lists - Horizontal</p>
    <dl class="horizontal">
      <dt>Description lists</dt>
      <dd>A description list is perfect for defining terms.</dd>
      <dt>Euismod</dt>
      <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
      <dd>Donec id elit non mi porta gravida at eget metus.</dd>
      <dt>Malesuada porta</dt>
      <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
    </dl>
  </u-page>
</template>

<script>
export default {
  data () {
    return {
      headings: [
        {label: 'Light 112sp', 'class': 'h1', equivalent: 'h1', color: 54, weight: 300},
        {label: 'Regular 56sp', 'class': 'h2', equivalent: 'h2', color: 54, weight: 400},
        {label: 'Regular 45sp', 'class': 'h3', equivalent: 'h3', color: 54, weight: 400},
        {label: 'Regular 34sp', 'class': 'h4', equivalent: 'h4', color: 54, weight: 400},
        {label: 'Regular 24sp', 'class': 'u-headline', equivalent: 'h5', color: 87, weight: 400},
        {label: 'Medium 20sp', 'class': 'u-title', equivalent: 'h6', color: 87, weight: 500},
        {label: 'Regular 16sp', 'class': 'u-subheading', color: 87, weight: 400},
        {label: 'Medium 14sp', 'class': 'u-body-2', color: 87, weight: 500},
        {label: 'Regular 14sp', 'class': 'u-body-1', color: 87, weight: 400},
        {label: 'Regular 12sp', 'class': 'u-caption', color: 54, weight: 400}
      ],
      weights: [
        'thin', 'light', 'regular', 'medium', 'bold', 'bolder'
      ]
    }
  }
}
</script>
