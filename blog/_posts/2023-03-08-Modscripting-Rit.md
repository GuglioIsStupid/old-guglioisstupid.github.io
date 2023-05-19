## Modscripting in Rit

### Wooo!!! Modscripting!!!!

<video controls>
    <source src="../../../assets/ritupdate-modscriptingshowcase.mp4" type="video/mp4">
</video>
^ Recreation of Delusion in Rit purely using modscripting

After some TEDIOUS modifier coding, I have finally successfully made a modscripting system for Rit! This means that you can now make your own mods for Rit! (Or just use the mods I made, but that's not the point of this post). The modscripting system is very simple, and I will explain it in this post.

#### How to make a mod

To make a modscript, go into the songs folder and make a folder called mod with a mod.lua file in it.

```lua
-- mod.lua

function create()
    -- Called when the song is loaded
end

function update(beat, time, dt)
    -- Called every frame
end

function key_pressed(key)
    -- Called when a key is pressed
end

function hit(lane, judgement)
    -- Called when a note is hit
end
```

Check out the [wiki](https://github.com/GuglioIsStupid/Rit/wiki) for more functions available for use in modscripts.

Btw modscripting supports other cool stuff like shaders (as seen in the video)


#### Code of the blog

```lua
hasModScript = rit.hasModscript()

if hasModScript then
    rit.setCool(true)
end
```

#### Other stuff

Still not sure what to put here...

![Man dancing on an arcade machine](https://helios-i.mashable.com/imagery/videos/06d6761q5mRCLqnSk1XONYM/hero-image.fill.size_1200x675.v1614268926.jpg)