/****************************************************************************
 Copyright (c) 2013-2016 Chukong Technologies Inc.
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

import { AudioSourceComponent } from './audio-source-component';
import { AvatarModelComponent, AvatarUnit } from './avatar-model-component';
import { BatchedSkinningModelComponent, SkinningModelUnit } from './batched-skinning-model-component';
import { CameraComponent } from './camera-component';
import { DirectionalLightComponent } from './directional-light-component';
import { EditorCameraComponent } from './editor-camera-component';
import { LightComponent } from './light-component';
import { ModelComponent } from './model-component';
import { BillboardComponent } from './particle/billboard-component';
import { LineComponent } from './particle/line-component';
import { ParticleSystemComponent } from './particle/particle-system-component';
import { ParticleUtils } from './particle/particle-utils';
import { BoxColliderComponent } from './physics/collider/box-collider-component';
import { ColliderComponentBase } from './physics/collider/collider-component';
import { SphereColliderComponent } from './physics/collider/sphere-collider-component';
import { RigidBodyComponent } from './physics/rigid-body-component';
import { RenderableComponent } from './renderable-component';
import { SkinningModelComponent } from './skinning-model-component';
import { SphereLightComponent } from './sphere-light-component';
import { SpotLightComponent } from './spot-light-component';
export * from './physics';

export {
    AudioSourceComponent,
    CameraComponent,
    LightComponent,
    ModelComponent,
    SkinningModelComponent,
    AvatarModelComponent,
    AvatarUnit,
    BatchedSkinningModelComponent,
    SkinningModelUnit,

    BoxColliderComponent,
    ParticleSystemComponent,
    BillboardComponent,
    LineComponent,
    RigidBodyComponent,
    SphereColliderComponent,

    RenderableComponent,
};

// cc.AnimationComponent = AnimationComponent;
cc.AudioSourceComponent = AudioSourceComponent;
cc.CameraComponent = CameraComponent;
cc.EditorComponent = EditorCameraComponent;
cc.RenderableComponent = RenderableComponent;
cc.ModelComponent = ModelComponent;
cc.SkinningModelComponent = SkinningModelComponent;

cc.AvatarModelComponent = AvatarModelComponent;
cc.AvatarUnit = AvatarUnit;
cc.BatchedSkinningModelComponent = BatchedSkinningModelComponent;
cc.SkinningModelUnit = SkinningModelUnit;

cc.LightComponent = LightComponent;
cc.DirectionalLightComponent = DirectionalLightComponent;
cc.SphereLightComponent = SphereLightComponent;
cc.SpotLightComponent = SpotLightComponent;

cc.ParticleSystemComponent = ParticleSystemComponent;
cc.BillboardComponent = BillboardComponent;
cc.LineComponent = LineComponent;

cc.ColliderComponentBase = ColliderComponentBase;
cc.BoxColliderComponent = BoxColliderComponent;
cc.SphereColliderComponent = SphereColliderComponent;
cc.RigidBodyComponent = RigidBodyComponent;

cc.ParticleUtils = ParticleUtils;