<template>
  <u-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">Examples of group buttons. Endless possibilities.</p>
      <u-btn-group push>
        <u-btn push label="First" icon="timeline" />
        <u-btn push label="Second" icon="visibility" />
        <u-btn push label="Third" icon="update" />
      </u-btn-group>

      <br><br>
      <u-btn-group push>
        <u-btn color="yellow" glossy text-color="black" push label="First" icon="verified_user" />
        <u-btn color="amber" glossy text-color="black" push label="Second" />
        <u-btn color="orange" glossy text-color="black" push label="Third" />
      </u-btn-group>

      <br><br>
      <u-btn-group outline>
        <u-btn outline color="brown" label="First" />
        <u-btn outline color="brown" label="Second" icon-right="watch_later" />
        <u-btn outline color="brown" label="Third" />
      </u-btn-group>

      <br><br>
      <u-btn-group>
        <u-btn color="secondary" glossy label="First" />
        <u-btn color="secondary" glossy label="Second" />
        <u-btn color="secondary" glossy label="Third" />
        <u-btn color="secondary" glossy label="Fourth" />
      </u-btn-group>

      <br><br>
      <u-btn-group>
        <u-btn color="tertiary" icon="timeline" />
        <u-btn color="tertiary" icon="visibility" />
        <u-btn color="tertiary" icon="update" />
      </u-btn-group>

      <br><br>
      <u-btn-group rounded>
        <u-btn color="amber" rounded glossy icon="timeline" />
        <u-btn color="amber" rounded glossy icon="visibility" />
        <u-btn color="amber" rounded glossy icon-right="update" label="Update" />
      </u-btn-group>

      <br><br>
      <u-btn-group rounded>
        <u-btn rounded color="primary" label="One" />
        <u-btn rounded color="primary" label="Two" />
        <u-btn-dropdown rounded color="primary" label="Three" split>
          <!-- dropdown content goes here -->
          <u-list link>
            <u-item v-close-overlay>
              <u-item-side icon="folder" inverted color="primary" />
              <u-item-main>
                <u-item-tile label>Photos</u-item-tile>
                <u-item-tile sublabel>February 22, 2016</u-item-tile>
              </u-item-main>
              <u-item-side right icon="info" color="amber" />
            </u-item>
            <u-item-separator inset />
            <u-list-header inset>Files</u-list-header>
            <u-item v-close-overlay>
              <u-item-side icon="assignment" inverted />
              <u-item-main>
                <u-item-tile label>Vacation</u-item-tile>
                <u-item-tile sublabel>February 22, 2016</u-item-tile>
              </u-item-main>
              <u-item-side right icon="info" color="amber" />
            </u-item>
          </u-list>
        </u-btn-dropdown>
      </u-btn-group>
    </div>
  </u-page>
</template>
