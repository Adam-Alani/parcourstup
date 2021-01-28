<script lang="ts">
    export let item = undefined;
</script>

<div class="mx-2 my-2">
    <div  class=" truncate">
        <p class="customItem_name  text font-semibold ">{item[0]} <span class="ml-2 text-xs font-normal">{item.slice(1)}</span></p>
    </div>
</div>
