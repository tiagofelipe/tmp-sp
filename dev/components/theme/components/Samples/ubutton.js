let examples = {}

examples.buttonOptions = `<u-btn class="btn btn-default">Default</u-btn>
<u-btn class="btn btn-primary">Primary</u-btn>
<u-btn class="btn btn-success">Success</u-btn>
<u-btn class="btn btn-info">Info</u-btn>
<u-btn class="btn btn-warning">Warning</u-btn>
<u-btn class="btn btn-danger">Danger</u-btn>
<u-btn class="btn btn-dark">Dark</u-btn>
<u-btn class="btn btn-gray">Gray</u-btn>
<u-btn class="btn btn-default disabled">Disabled</u-btn>
`
examples.buttonSize = `<u-btn class="btn btn-default btn-lg">Large</u-btn>
<u-btn class="btn btn-primary btn-addon btn-lg"><i class="fa fa-plus"></i>Addon</u-btn>
<u-btn class="btn btn-default">Default button</u-btn>
<u-btn class="btn btn-default btn-sm">Small button</u-btn>
<u-btn class="btn btn-default btn-xs">Extra small button</u-btn>
`

examples.buttonAddon = `<u-btn class="btn btn-primary btn-addon"><i class="fa fa-plus"></i>Primary</u-btn>
<u-btn class="btn btn-info btn-addon"><i class="fa fa-trash-o"></i>Info</u-btn>
<u-btn class="btn btn-success btn-addon"><i class="fa fa-minus pull-right"></i>Success</u-btn>
<u-btn class="btn btn-warning btn-addon"><i class="fa fa-circle"></i>Warning</u-btn>
<u-btn class="btn btn-default btn-addon"><i class="fa fa-plus"></i>Default</u-btn>
`

examples.buttonComponent = `<u-btn class="btn btn-default m-b-xs" toggle-class="btn-success">
    <i class="fa fa-cloud-upload text"></i>
    <span class="text">Upload</span>
    <i class="fa fa-check text-active"></i>
    <span class="text-active">Success</span>
</u-btn>

<u-btn class="btn btn-default m-b-xs" toggle-class="button">
    <i class="fa fa-heart-o text"></i>
    <i class="fa fa-heart text-active text-danger"></i>
</u-btn>

<u-btn class="btn btn-default m-b-xs" toggle-class="button" ref="btnTest">
    <span class="text">
        <i class="fa fa-thumbs-up text-success"></i> 25
    </span>
    <span class="text-active">
        <i class="fa fa-thumbs-down text-danger"></i> 10
    </span>
</u-btn>

<u-btn class="btn btn-success m-b-xs" toggle-class="show inline">
    <span class="text">Save</span>
    <span class="text-active">Saving...</span>
</u-btn>

<u-btn-group v-model="modelButtonGroup"
  :options="[
      {label: 'Option 1', value: 'opt1', class: 'btn-info'},
      {label: 'Option 2', value: 'opt2', class: 'btn-success'},
      {label: 'Option 3', value: 'opt3', class: 'btn-primary'}
    ]">
</u-btn-group>

<u-btn-group :multi-select="true" v-model="modelButtonGroupMultiSelect"
  :options="[
      { label: 'Multi Select 1', value: 'opt1', class: 'btn-info' },
      { label: 'Multi Select 2', value: 'opt2', class: 'btn-success' },
      { label: 'Multi Select 3', value: 'opt3', class: 'btn-primary' }
    ]">
</u-btn-group>

<u-btn-group :multi-select="true" v-model="modelButtonGroupMultiSelect"
  :options="[
      { label: 'Option1', value: 'opt1', class: 'btn-default' },
      { label: 'Option2', value: 'opt2', class: 'btn-default' }
    ]">
</u-btn-group>
`

export default examples
