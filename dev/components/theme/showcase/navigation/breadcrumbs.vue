<template>
  <u-page padding>
    <p class="caption">Basic</p>
    <u-breadcrumbs>
      <u-breadcrumbs-el label="Home" icon="home" />
      <u-breadcrumbs-el label="Components" icon="widgets" />
      <u-breadcrumbs-el label="Breadcrumbs" icon="navigation" />
    </u-breadcrumbs>

    <p class="caption">With links and custom icon separator</p>
    <u-breadcrumbs separator=">" active-color="secondary" color="light">
      <u-breadcrumbs-el label="Home" to="/" />
      <u-breadcrumbs-el label="Components" to="/components" />
      <u-breadcrumbs-el label="Breadcrumbs" to="/components/breadcrums" />
      <u-breadcrumbs-el label="Bogus" to="/components/breadcrums/bogus" />
    </u-breadcrumbs>

    <p class="caption">With separator as scoped slot</p>
    <u-breadcrumbs>
      <u-icon name="trending_flat" slot="separator" slot-scope="props" />
      <u-breadcrumbs-el active>Home</u-breadcrumbs-el>
      <u-breadcrumbs-el>Components</u-breadcrumbs-el>
      <u-breadcrumbs-el>Breadcrumbs</u-breadcrumbs-el>
    </u-breadcrumbs>

    <p class="caption">With different alignment</p>
    <u-breadcrumbs align="center" style="max-width: 700px">
      <u-icon name="arrow_forward" slot="separator" slot-scope="props" />
      <u-breadcrumbs-el>Home</u-breadcrumbs-el>
      <u-breadcrumbs-el>Components</u-breadcrumbs-el>
      <u-breadcrumbs-el>Breadcrumbs</u-breadcrumbs-el>
    </u-breadcrumbs>
  </u-page>
</template>
