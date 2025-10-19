import * as __typia_transform__validateReport from "typia/lib/internal/_validateReport.js";
import * as __typia_transform__createStandardSchema from "typia/lib/internal/_createStandardSchema.js";
import * as __typia_transform__accessExpressionAsString from "typia/lib/internal/_accessExpressionAsString.js";
import type { TablesUpdate, TablesInsert, Tables } from '~/types/database.types';
const slugValidator = (() => { const _io0 = (input: any): boolean => "string" === typeof input.slug; const _vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.slug || _report(_exceptionable, {
        path: _path + ".slug",
        expected: "string",
        value: input.slug
    })].every((flag: boolean) => flag); const __is = (input: any): input is { slug: string } => "object" === typeof input && null !== input && _io0(input); let errors: any; let _report: any; return __typia_transform__createStandardSchema._createStandardSchema((input: any): import("typia").IValidation<{ slug: string }> => {
    if (false === __is(input)) {
        errors = [];
        _report = (__typia_transform__validateReport._validateReport as any)(errors);
        ((input: any, _path: string, _exceptionable: boolean = true) => ("object" === typeof input && null !== input || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        })) && _vo0(input, _path + "", true) || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        }))(input, "$input", true);
        const success = 0 === errors.length;
        return success ? {
            success,
            data: input
        } : {
            success,
            errors,
            data: input
        } as any;
    }
    return {
        success: true,
        data: input
    } as any;
}); })();
const idValidator = (() => { const _io0 = (input: any): boolean => "string" === typeof input.id; const _vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.id || _report(_exceptionable, {
        path: _path + ".id",
        expected: "string",
        value: input.id
    })].every((flag: boolean) => flag); const __is = (input: any): input is { id: string } => "object" === typeof input && null !== input && _io0(input); let errors: any; let _report: any; return __typia_transform__createStandardSchema._createStandardSchema((input: any): import("typia").IValidation<{ id: string }> => {
    if (false === __is(input)) {
        errors = [];
        _report = (__typia_transform__validateReport._validateReport as any)(errors);
        ((input: any, _path: string, _exceptionable: boolean = true) => ("object" === typeof input && null !== input || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        })) && _vo0(input, _path + "", true) || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        }))(input, "$input", true);
        const success = 0 === errors.length;
        return success ? {
            success,
            data: input
        } : {
            success,
            errors,
            data: input
        } as any;
    }
    return {
        success: true,
        data: input
    } as any;
}); })();
const blogInsertValidator = (() => { const _io0 = (input: any): boolean => (null === input.content || undefined === input.content || "string" === typeof input.content) && (undefined === input.created_at || "string" === typeof input.created_at) && (undefined === input.description || "string" === typeof input.description) && (undefined === input.id || "number" === typeof input.id) && (undefined === input.published || "boolean" === typeof input.published) && (null === input.slug || undefined === input.slug || "string" === typeof input.slug) && (null === input.title || undefined === input.title || "string" === typeof input.title); const _vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [null === input.content || undefined === input.content || "string" === typeof input.content || _report(_exceptionable, {
        path: _path + ".content",
        expected: "(null | string | undefined)",
        value: input.content
    }), undefined === input.created_at || "string" === typeof input.created_at || _report(_exceptionable, {
        path: _path + ".created_at",
        expected: "(string | undefined)",
        value: input.created_at
    }), undefined === input.description || "string" === typeof input.description || _report(_exceptionable, {
        path: _path + ".description",
        expected: "(string | undefined)",
        value: input.description
    }), undefined === input.id || "number" === typeof input.id || _report(_exceptionable, {
        path: _path + ".id",
        expected: "(number | undefined)",
        value: input.id
    }), undefined === input.published || "boolean" === typeof input.published || _report(_exceptionable, {
        path: _path + ".published",
        expected: "(boolean | undefined)",
        value: input.published
    }), null === input.slug || undefined === input.slug || "string" === typeof input.slug || _report(_exceptionable, {
        path: _path + ".slug",
        expected: "(null | string | undefined)",
        value: input.slug
    }), null === input.title || undefined === input.title || "string" === typeof input.title || _report(_exceptionable, {
        path: _path + ".title",
        expected: "(null | string | undefined)",
        value: input.title
    })].every((flag: boolean) => flag); const __is = (input: any): input is TablesInsert<"blog"> => "object" === typeof input && null !== input && false === Array.isArray(input) && _io0(input); let errors: any; let _report: any; return __typia_transform__createStandardSchema._createStandardSchema((input: any): import("typia").IValidation<TablesInsert<"blog">> => {
    if (false === __is(input)) {
        errors = [];
        _report = (__typia_transform__validateReport._validateReport as any)(errors);
        ((input: any, _path: string, _exceptionable: boolean = true) => ("object" === typeof input && null !== input && false === Array.isArray(input) || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        })) && _vo0(input, _path + "", true) || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        }))(input, "$input", true);
        const success = 0 === errors.length;
        return success ? {
            success,
            data: input
        } : {
            success,
            errors,
            data: input
        } as any;
    }
    return {
        success: true,
        data: input
    } as any;
}); })();
const blogUpdateValidator = (() => { const _io0 = (input: any): boolean => (null === input.content || undefined === input.content || "string" === typeof input.content) && (undefined === input.created_at || "string" === typeof input.created_at) && (undefined === input.description || "string" === typeof input.description) && (undefined === input.id || "number" === typeof input.id) && (undefined === input.published || "boolean" === typeof input.published) && (null === input.slug || undefined === input.slug || "string" === typeof input.slug) && (null === input.title || undefined === input.title || "string" === typeof input.title); const _vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [null === input.content || undefined === input.content || "string" === typeof input.content || _report(_exceptionable, {
        path: _path + ".content",
        expected: "(null | string | undefined)",
        value: input.content
    }), undefined === input.created_at || "string" === typeof input.created_at || _report(_exceptionable, {
        path: _path + ".created_at",
        expected: "(string | undefined)",
        value: input.created_at
    }), undefined === input.description || "string" === typeof input.description || _report(_exceptionable, {
        path: _path + ".description",
        expected: "(string | undefined)",
        value: input.description
    }), undefined === input.id || "number" === typeof input.id || _report(_exceptionable, {
        path: _path + ".id",
        expected: "(number | undefined)",
        value: input.id
    }), undefined === input.published || "boolean" === typeof input.published || _report(_exceptionable, {
        path: _path + ".published",
        expected: "(boolean | undefined)",
        value: input.published
    }), null === input.slug || undefined === input.slug || "string" === typeof input.slug || _report(_exceptionable, {
        path: _path + ".slug",
        expected: "(null | string | undefined)",
        value: input.slug
    }), null === input.title || undefined === input.title || "string" === typeof input.title || _report(_exceptionable, {
        path: _path + ".title",
        expected: "(null | string | undefined)",
        value: input.title
    })].every((flag: boolean) => flag); const __is = (input: any): input is TablesUpdate<"blog"> => "object" === typeof input && null !== input && false === Array.isArray(input) && _io0(input); let errors: any; let _report: any; return __typia_transform__createStandardSchema._createStandardSchema((input: any): import("typia").IValidation<TablesUpdate<"blog">> => {
    if (false === __is(input)) {
        errors = [];
        _report = (__typia_transform__validateReport._validateReport as any)(errors);
        ((input: any, _path: string, _exceptionable: boolean = true) => ("object" === typeof input && null !== input && false === Array.isArray(input) || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        })) && _vo0(input, _path + "", true) || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        }))(input, "$input", true);
        const success = 0 === errors.length;
        return success ? {
            success,
            data: input
        } : {
            success,
            errors,
            data: input
        } as any;
    }
    return {
        success: true,
        data: input
    } as any;
}); })();
const blogValidator = (() => { const _io0 = (input: any): boolean => (null === input.content || "string" === typeof input.content) && "string" === typeof input.created_at && "string" === typeof input.description && "number" === typeof input.id && "boolean" === typeof input.published && (null === input.slug || "string" === typeof input.slug) && (null === input.title || "string" === typeof input.title); const _vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [null === input.content || "string" === typeof input.content || _report(_exceptionable, {
        path: _path + ".content",
        expected: "(null | string)",
        value: input.content
    }), "string" === typeof input.created_at || _report(_exceptionable, {
        path: _path + ".created_at",
        expected: "string",
        value: input.created_at
    }), "string" === typeof input.description || _report(_exceptionable, {
        path: _path + ".description",
        expected: "string",
        value: input.description
    }), "number" === typeof input.id || _report(_exceptionable, {
        path: _path + ".id",
        expected: "number",
        value: input.id
    }), "boolean" === typeof input.published || _report(_exceptionable, {
        path: _path + ".published",
        expected: "boolean",
        value: input.published
    }), null === input.slug || "string" === typeof input.slug || _report(_exceptionable, {
        path: _path + ".slug",
        expected: "(null | string)",
        value: input.slug
    }), null === input.title || "string" === typeof input.title || _report(_exceptionable, {
        path: _path + ".title",
        expected: "(null | string)",
        value: input.title
    })].every((flag: boolean) => flag); const __is = (input: any): input is Tables<"blog"> => "object" === typeof input && null !== input && _io0(input); let errors: any; let _report: any; return __typia_transform__createStandardSchema._createStandardSchema((input: any): import("typia").IValidation<Tables<"blog">> => {
    if (false === __is(input)) {
        errors = [];
        _report = (__typia_transform__validateReport._validateReport as any)(errors);
        ((input: any, _path: string, _exceptionable: boolean = true) => ("object" === typeof input && null !== input || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        })) && _vo0(input, _path + "", true) || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        }))(input, "$input", true);
        const success = 0 === errors.length;
        return success ? {
            success,
            data: input
        } : {
            success,
            errors,
            data: input
        } as any;
    }
    return {
        success: true,
        data: input
    } as any;
}); })();
const projectInsertValidator = (() => { const _io0 = (input: any): boolean => (undefined === input.created_at || "string" === typeof input.created_at) && (null === input.description || undefined === input.description || "string" === typeof input.description) && (null === input.duration || undefined === input.duration || "string" === typeof input.duration) && (null === input.extraLinks || undefined === input.extraLinks || "string" === typeof input.extraLinks || "number" === typeof input.extraLinks || "boolean" === typeof input.extraLinks || (Array.isArray(input.extraLinks) && (_ia0(input.extraLinks) || false) || "object" === typeof input.extraLinks && null !== input.extraLinks && false === Array.isArray(input.extraLinks) && _io1(input.extraLinks))) && (undefined === input.id || "number" === typeof input.id) && (null === input.image || undefined === input.image || "string" === typeof input.image) && (null === input.landingDescription || undefined === input.landingDescription || "string" === typeof input.landingDescription) && (null === input.littleDescription || undefined === input.littleDescription || "string" === typeof input.littleDescription) && (null === input.location || undefined === input.location || "string" === typeof input.location) && (null === input.technologies || undefined === input.technologies || "string" === typeof input.technologies || "number" === typeof input.technologies || "boolean" === typeof input.technologies || (Array.isArray(input.technologies) && (_ia0(input.technologies) || false) || "object" === typeof input.technologies && null !== input.technologies && false === Array.isArray(input.technologies) && _io1(input.technologies))) && (null === input.title || undefined === input.title || "string" === typeof input.title); const _io1 = (input: any): boolean => Object.keys(input).every((key: any) => {
    const value = input[key];
    if (undefined === value)
        return true;
    return null === value || undefined === value || "string" === typeof value || "number" === typeof value || "boolean" === typeof value || (Array.isArray(value) && (_ia0(value) || false) || "object" === typeof value && null !== value && false === Array.isArray(value) && _io1(value));
}); const _ia0 = (input: any): any => input.every((elem: any) => undefined !== elem && (null === elem || "string" === typeof elem || "number" === typeof elem || "boolean" === typeof elem || (Array.isArray(elem) && (_ia0(elem) || false) || "object" === typeof elem && null !== elem && false === Array.isArray(elem) && _io1(elem)))); const _vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.created_at || "string" === typeof input.created_at || _report(_exceptionable, {
        path: _path + ".created_at",
        expected: "(string | undefined)",
        value: input.created_at
    }), null === input.description || undefined === input.description || "string" === typeof input.description || _report(_exceptionable, {
        path: _path + ".description",
        expected: "(null | string | undefined)",
        value: input.description
    }), null === input.duration || undefined === input.duration || "string" === typeof input.duration || _report(_exceptionable, {
        path: _path + ".duration",
        expected: "(null | string | undefined)",
        value: input.duration
    }), null === input.extraLinks || undefined === input.extraLinks || "string" === typeof input.extraLinks || "number" === typeof input.extraLinks || "boolean" === typeof input.extraLinks || (Array.isArray(input.extraLinks) && (_va0(input.extraLinks, _path + ".extraLinks", true && _exceptionable) || _report(_exceptionable, {
        path: _path + ".extraLinks",
        expected: "Array<Json>",
        value: input.extraLinks
    })) || "object" === typeof input.extraLinks && null !== input.extraLinks && false === Array.isArray(input.extraLinks) && _vo1(input.extraLinks, _path + ".extraLinks", true && _exceptionable) || _report(_exceptionable, {
        path: _path + ".extraLinks",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
        value: input.extraLinks
    })) || _report(_exceptionable, {
        path: _path + ".extraLinks",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
        value: input.extraLinks
    }), undefined === input.id || "number" === typeof input.id || _report(_exceptionable, {
        path: _path + ".id",
        expected: "(number | undefined)",
        value: input.id
    }), null === input.image || undefined === input.image || "string" === typeof input.image || _report(_exceptionable, {
        path: _path + ".image",
        expected: "(null | string | undefined)",
        value: input.image
    }), null === input.landingDescription || undefined === input.landingDescription || "string" === typeof input.landingDescription || _report(_exceptionable, {
        path: _path + ".landingDescription",
        expected: "(null | string | undefined)",
        value: input.landingDescription
    }), null === input.littleDescription || undefined === input.littleDescription || "string" === typeof input.littleDescription || _report(_exceptionable, {
        path: _path + ".littleDescription",
        expected: "(null | string | undefined)",
        value: input.littleDescription
    }), null === input.location || undefined === input.location || "string" === typeof input.location || _report(_exceptionable, {
        path: _path + ".location",
        expected: "(null | string | undefined)",
        value: input.location
    }), null === input.technologies || undefined === input.technologies || "string" === typeof input.technologies || "number" === typeof input.technologies || "boolean" === typeof input.technologies || (Array.isArray(input.technologies) && (_va0(input.technologies, _path + ".technologies", true && _exceptionable) || _report(_exceptionable, {
        path: _path + ".technologies",
        expected: "Array<Json>",
        value: input.technologies
    })) || "object" === typeof input.technologies && null !== input.technologies && false === Array.isArray(input.technologies) && _vo1(input.technologies, _path + ".technologies", true && _exceptionable) || _report(_exceptionable, {
        path: _path + ".technologies",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
        value: input.technologies
    })) || _report(_exceptionable, {
        path: _path + ".technologies",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
        value: input.technologies
    }), null === input.title || undefined === input.title || "string" === typeof input.title || _report(_exceptionable, {
        path: _path + ".title",
        expected: "(null | string | undefined)",
        value: input.title
    })].every((flag: boolean) => flag); const _vo1 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [false === _exceptionable || Object.keys(input).map((key: any) => {
        const value = input[key];
        if (undefined === value)
            return true;
        return null === value || undefined === value || "string" === typeof value || "number" === typeof value || "boolean" === typeof value || (Array.isArray(value) && (_va0(value, _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key), true && _exceptionable) || _report(_exceptionable, {
            path: _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key),
            expected: "Array<Json>",
            value: value
        })) || "object" === typeof value && null !== value && false === Array.isArray(value) && _vo1(value, _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key), true && _exceptionable) || _report(_exceptionable, {
            path: _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key),
            expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
            value: value
        })) || _report(_exceptionable, {
            path: _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key),
            expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
            value: value
        });
    }).every((flag: boolean) => flag)].every((flag: boolean) => flag); const _va0 = (input: any, _path: string, _exceptionable: boolean = true): any => input.map((elem: any, _index2: number) => (undefined !== elem || _report(_exceptionable, {
    path: _path + "[" + _index2 + "]",
    expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
    value: elem
})) && (null === elem || "string" === typeof elem || "number" === typeof elem || "boolean" === typeof elem || (Array.isArray(elem) && (_va0(elem, _path + "[" + _index2 + "]", true && _exceptionable) || _report(_exceptionable, {
    path: _path + "[" + _index2 + "]",
    expected: "Array<Json>",
    value: elem
})) || "object" === typeof elem && null !== elem && false === Array.isArray(elem) && _vo1(elem, _path + "[" + _index2 + "]", true && _exceptionable) || _report(_exceptionable, {
    path: _path + "[" + _index2 + "]",
    expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
    value: elem
})) || _report(_exceptionable, {
    path: _path + "[" + _index2 + "]",
    expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
    value: elem
}))).every((flag: boolean) => flag); const __is = (input: any): input is TablesInsert<"projects"> => "object" === typeof input && null !== input && false === Array.isArray(input) && _io0(input); let errors: any; let _report: any; return __typia_transform__createStandardSchema._createStandardSchema((input: any): import("typia").IValidation<TablesInsert<"projects">> => {
    if (false === __is(input)) {
        errors = [];
        _report = (__typia_transform__validateReport._validateReport as any)(errors);
        ((input: any, _path: string, _exceptionable: boolean = true) => ("object" === typeof input && null !== input && false === Array.isArray(input) || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        })) && _vo0(input, _path + "", true) || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        }))(input, "$input", true);
        const success = 0 === errors.length;
        return success ? {
            success,
            data: input
        } : {
            success,
            errors,
            data: input
        } as any;
    }
    return {
        success: true,
        data: input
    } as any;
}); })();
const projectUpdateValidator = (() => { const _io0 = (input: any): boolean => (undefined === input.created_at || "string" === typeof input.created_at) && (null === input.description || undefined === input.description || "string" === typeof input.description) && (null === input.duration || undefined === input.duration || "string" === typeof input.duration) && (null === input.extraLinks || undefined === input.extraLinks || "string" === typeof input.extraLinks || "number" === typeof input.extraLinks || "boolean" === typeof input.extraLinks || (Array.isArray(input.extraLinks) && (_ia0(input.extraLinks) || false) || "object" === typeof input.extraLinks && null !== input.extraLinks && false === Array.isArray(input.extraLinks) && _io1(input.extraLinks))) && (undefined === input.id || "number" === typeof input.id) && (null === input.image || undefined === input.image || "string" === typeof input.image) && (null === input.landingDescription || undefined === input.landingDescription || "string" === typeof input.landingDescription) && (null === input.littleDescription || undefined === input.littleDescription || "string" === typeof input.littleDescription) && (null === input.location || undefined === input.location || "string" === typeof input.location) && (null === input.technologies || undefined === input.technologies || "string" === typeof input.technologies || "number" === typeof input.technologies || "boolean" === typeof input.technologies || (Array.isArray(input.technologies) && (_ia0(input.technologies) || false) || "object" === typeof input.technologies && null !== input.technologies && false === Array.isArray(input.technologies) && _io1(input.technologies))) && (null === input.title || undefined === input.title || "string" === typeof input.title); const _io1 = (input: any): boolean => Object.keys(input).every((key: any) => {
    const value = input[key];
    if (undefined === value)
        return true;
    return null === value || undefined === value || "string" === typeof value || "number" === typeof value || "boolean" === typeof value || (Array.isArray(value) && (_ia0(value) || false) || "object" === typeof value && null !== value && false === Array.isArray(value) && _io1(value));
}); const _ia0 = (input: any): any => input.every((elem: any) => undefined !== elem && (null === elem || "string" === typeof elem || "number" === typeof elem || "boolean" === typeof elem || (Array.isArray(elem) && (_ia0(elem) || false) || "object" === typeof elem && null !== elem && false === Array.isArray(elem) && _io1(elem)))); const _vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.created_at || "string" === typeof input.created_at || _report(_exceptionable, {
        path: _path + ".created_at",
        expected: "(string | undefined)",
        value: input.created_at
    }), null === input.description || undefined === input.description || "string" === typeof input.description || _report(_exceptionable, {
        path: _path + ".description",
        expected: "(null | string | undefined)",
        value: input.description
    }), null === input.duration || undefined === input.duration || "string" === typeof input.duration || _report(_exceptionable, {
        path: _path + ".duration",
        expected: "(null | string | undefined)",
        value: input.duration
    }), null === input.extraLinks || undefined === input.extraLinks || "string" === typeof input.extraLinks || "number" === typeof input.extraLinks || "boolean" === typeof input.extraLinks || (Array.isArray(input.extraLinks) && (_va0(input.extraLinks, _path + ".extraLinks", true && _exceptionable) || _report(_exceptionable, {
        path: _path + ".extraLinks",
        expected: "Array<Json>",
        value: input.extraLinks
    })) || "object" === typeof input.extraLinks && null !== input.extraLinks && false === Array.isArray(input.extraLinks) && _vo1(input.extraLinks, _path + ".extraLinks", true && _exceptionable) || _report(_exceptionable, {
        path: _path + ".extraLinks",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
        value: input.extraLinks
    })) || _report(_exceptionable, {
        path: _path + ".extraLinks",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
        value: input.extraLinks
    }), undefined === input.id || "number" === typeof input.id || _report(_exceptionable, {
        path: _path + ".id",
        expected: "(number | undefined)",
        value: input.id
    }), null === input.image || undefined === input.image || "string" === typeof input.image || _report(_exceptionable, {
        path: _path + ".image",
        expected: "(null | string | undefined)",
        value: input.image
    }), null === input.landingDescription || undefined === input.landingDescription || "string" === typeof input.landingDescription || _report(_exceptionable, {
        path: _path + ".landingDescription",
        expected: "(null | string | undefined)",
        value: input.landingDescription
    }), null === input.littleDescription || undefined === input.littleDescription || "string" === typeof input.littleDescription || _report(_exceptionable, {
        path: _path + ".littleDescription",
        expected: "(null | string | undefined)",
        value: input.littleDescription
    }), null === input.location || undefined === input.location || "string" === typeof input.location || _report(_exceptionable, {
        path: _path + ".location",
        expected: "(null | string | undefined)",
        value: input.location
    }), null === input.technologies || undefined === input.technologies || "string" === typeof input.technologies || "number" === typeof input.technologies || "boolean" === typeof input.technologies || (Array.isArray(input.technologies) && (_va0(input.technologies, _path + ".technologies", true && _exceptionable) || _report(_exceptionable, {
        path: _path + ".technologies",
        expected: "Array<Json>",
        value: input.technologies
    })) || "object" === typeof input.technologies && null !== input.technologies && false === Array.isArray(input.technologies) && _vo1(input.technologies, _path + ".technologies", true && _exceptionable) || _report(_exceptionable, {
        path: _path + ".technologies",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
        value: input.technologies
    })) || _report(_exceptionable, {
        path: _path + ".technologies",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
        value: input.technologies
    }), null === input.title || undefined === input.title || "string" === typeof input.title || _report(_exceptionable, {
        path: _path + ".title",
        expected: "(null | string | undefined)",
        value: input.title
    })].every((flag: boolean) => flag); const _vo1 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [false === _exceptionable || Object.keys(input).map((key: any) => {
        const value = input[key];
        if (undefined === value)
            return true;
        return null === value || undefined === value || "string" === typeof value || "number" === typeof value || "boolean" === typeof value || (Array.isArray(value) && (_va0(value, _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key), true && _exceptionable) || _report(_exceptionable, {
            path: _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key),
            expected: "Array<Json>",
            value: value
        })) || "object" === typeof value && null !== value && false === Array.isArray(value) && _vo1(value, _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key), true && _exceptionable) || _report(_exceptionable, {
            path: _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key),
            expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
            value: value
        })) || _report(_exceptionable, {
            path: _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key),
            expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
            value: value
        });
    }).every((flag: boolean) => flag)].every((flag: boolean) => flag); const _va0 = (input: any, _path: string, _exceptionable: boolean = true): any => input.map((elem: any, _index2: number) => (undefined !== elem || _report(_exceptionable, {
    path: _path + "[" + _index2 + "]",
    expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
    value: elem
})) && (null === elem || "string" === typeof elem || "number" === typeof elem || "boolean" === typeof elem || (Array.isArray(elem) && (_va0(elem, _path + "[" + _index2 + "]", true && _exceptionable) || _report(_exceptionable, {
    path: _path + "[" + _index2 + "]",
    expected: "Array<Json>",
    value: elem
})) || "object" === typeof elem && null !== elem && false === Array.isArray(elem) && _vo1(elem, _path + "[" + _index2 + "]", true && _exceptionable) || _report(_exceptionable, {
    path: _path + "[" + _index2 + "]",
    expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
    value: elem
})) || _report(_exceptionable, {
    path: _path + "[" + _index2 + "]",
    expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
    value: elem
}))).every((flag: boolean) => flag); const __is = (input: any): input is TablesUpdate<"projects"> => "object" === typeof input && null !== input && false === Array.isArray(input) && _io0(input); let errors: any; let _report: any; return __typia_transform__createStandardSchema._createStandardSchema((input: any): import("typia").IValidation<TablesUpdate<"projects">> => {
    if (false === __is(input)) {
        errors = [];
        _report = (__typia_transform__validateReport._validateReport as any)(errors);
        ((input: any, _path: string, _exceptionable: boolean = true) => ("object" === typeof input && null !== input && false === Array.isArray(input) || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        })) && _vo0(input, _path + "", true) || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        }))(input, "$input", true);
        const success = 0 === errors.length;
        return success ? {
            success,
            data: input
        } : {
            success,
            errors,
            data: input
        } as any;
    }
    return {
        success: true,
        data: input
    } as any;
}); })();
const projectValidator = (() => { const _io0 = (input: any): boolean => "string" === typeof input.created_at && (null === input.description || "string" === typeof input.description) && (null === input.duration || "string" === typeof input.duration) && (undefined !== input.extraLinks && (null === input.extraLinks || "string" === typeof input.extraLinks || "number" === typeof input.extraLinks || "boolean" === typeof input.extraLinks || (Array.isArray(input.extraLinks) && (_ia0(input.extraLinks) || false) || "object" === typeof input.extraLinks && null !== input.extraLinks && false === Array.isArray(input.extraLinks) && _io1(input.extraLinks)))) && "number" === typeof input.id && (null === input.image || "string" === typeof input.image) && (null === input.landingDescription || "string" === typeof input.landingDescription) && (null === input.littleDescription || "string" === typeof input.littleDescription) && (null === input.location || "string" === typeof input.location) && (undefined !== input.technologies && (null === input.technologies || "string" === typeof input.technologies || "number" === typeof input.technologies || "boolean" === typeof input.technologies || (Array.isArray(input.technologies) && (_ia0(input.technologies) || false) || "object" === typeof input.technologies && null !== input.technologies && false === Array.isArray(input.technologies) && _io1(input.technologies)))) && (null === input.title || "string" === typeof input.title); const _io1 = (input: any): boolean => Object.keys(input).every((key: any) => {
    const value = input[key];
    if (undefined === value)
        return true;
    return null === value || undefined === value || "string" === typeof value || "number" === typeof value || "boolean" === typeof value || (Array.isArray(value) && (_ia0(value) || false) || "object" === typeof value && null !== value && false === Array.isArray(value) && _io1(value));
}); const _ia0 = (input: any): any => input.every((elem: any) => undefined !== elem && (null === elem || "string" === typeof elem || "number" === typeof elem || "boolean" === typeof elem || (Array.isArray(elem) && (_ia0(elem) || false) || "object" === typeof elem && null !== elem && false === Array.isArray(elem) && _io1(elem)))); const _vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.created_at || _report(_exceptionable, {
        path: _path + ".created_at",
        expected: "string",
        value: input.created_at
    }), null === input.description || "string" === typeof input.description || _report(_exceptionable, {
        path: _path + ".description",
        expected: "(null | string)",
        value: input.description
    }), null === input.duration || "string" === typeof input.duration || _report(_exceptionable, {
        path: _path + ".duration",
        expected: "(null | string)",
        value: input.duration
    }), (undefined !== input.extraLinks || _report(_exceptionable, {
        path: _path + ".extraLinks",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
        value: input.extraLinks
    })) && (null === input.extraLinks || "string" === typeof input.extraLinks || "number" === typeof input.extraLinks || "boolean" === typeof input.extraLinks || (Array.isArray(input.extraLinks) && (_va0(input.extraLinks, _path + ".extraLinks", true && _exceptionable) || _report(_exceptionable, {
        path: _path + ".extraLinks",
        expected: "Array<Json>",
        value: input.extraLinks
    })) || "object" === typeof input.extraLinks && null !== input.extraLinks && false === Array.isArray(input.extraLinks) && _vo1(input.extraLinks, _path + ".extraLinks", true && _exceptionable) || _report(_exceptionable, {
        path: _path + ".extraLinks",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
        value: input.extraLinks
    })) || _report(_exceptionable, {
        path: _path + ".extraLinks",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
        value: input.extraLinks
    })), "number" === typeof input.id || _report(_exceptionable, {
        path: _path + ".id",
        expected: "number",
        value: input.id
    }), null === input.image || "string" === typeof input.image || _report(_exceptionable, {
        path: _path + ".image",
        expected: "(null | string)",
        value: input.image
    }), null === input.landingDescription || "string" === typeof input.landingDescription || _report(_exceptionable, {
        path: _path + ".landingDescription",
        expected: "(null | string)",
        value: input.landingDescription
    }), null === input.littleDescription || "string" === typeof input.littleDescription || _report(_exceptionable, {
        path: _path + ".littleDescription",
        expected: "(null | string)",
        value: input.littleDescription
    }), null === input.location || "string" === typeof input.location || _report(_exceptionable, {
        path: _path + ".location",
        expected: "(null | string)",
        value: input.location
    }), (undefined !== input.technologies || _report(_exceptionable, {
        path: _path + ".technologies",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
        value: input.technologies
    })) && (null === input.technologies || "string" === typeof input.technologies || "number" === typeof input.technologies || "boolean" === typeof input.technologies || (Array.isArray(input.technologies) && (_va0(input.technologies, _path + ".technologies", true && _exceptionable) || _report(_exceptionable, {
        path: _path + ".technologies",
        expected: "Array<Json>",
        value: input.technologies
    })) || "object" === typeof input.technologies && null !== input.technologies && false === Array.isArray(input.technologies) && _vo1(input.technologies, _path + ".technologies", true && _exceptionable) || _report(_exceptionable, {
        path: _path + ".technologies",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
        value: input.technologies
    })) || _report(_exceptionable, {
        path: _path + ".technologies",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
        value: input.technologies
    })), null === input.title || "string" === typeof input.title || _report(_exceptionable, {
        path: _path + ".title",
        expected: "(null | string)",
        value: input.title
    })].every((flag: boolean) => flag); const _vo1 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [false === _exceptionable || Object.keys(input).map((key: any) => {
        const value = input[key];
        if (undefined === value)
            return true;
        return null === value || undefined === value || "string" === typeof value || "number" === typeof value || "boolean" === typeof value || (Array.isArray(value) && (_va0(value, _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key), true && _exceptionable) || _report(_exceptionable, {
            path: _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key),
            expected: "Array<Json>",
            value: value
        })) || "object" === typeof value && null !== value && false === Array.isArray(value) && _vo1(value, _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key), true && _exceptionable) || _report(_exceptionable, {
            path: _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key),
            expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
            value: value
        })) || _report(_exceptionable, {
            path: _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key),
            expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
            value: value
        });
    }).every((flag: boolean) => flag)].every((flag: boolean) => flag); const _va0 = (input: any, _path: string, _exceptionable: boolean = true): any => input.map((elem: any, _index2: number) => (undefined !== elem || _report(_exceptionable, {
    path: _path + "[" + _index2 + "]",
    expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
    value: elem
})) && (null === elem || "string" === typeof elem || "number" === typeof elem || "boolean" === typeof elem || (Array.isArray(elem) && (_va0(elem, _path + "[" + _index2 + "]", true && _exceptionable) || _report(_exceptionable, {
    path: _path + "[" + _index2 + "]",
    expected: "Array<Json>",
    value: elem
})) || "object" === typeof elem && null !== elem && false === Array.isArray(elem) && _vo1(elem, _path + "[" + _index2 + "]", true && _exceptionable) || _report(_exceptionable, {
    path: _path + "[" + _index2 + "]",
    expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
    value: elem
})) || _report(_exceptionable, {
    path: _path + "[" + _index2 + "]",
    expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
    value: elem
}))).every((flag: boolean) => flag); const __is = (input: any): input is Tables<"projects"> => "object" === typeof input && null !== input && _io0(input); let errors: any; let _report: any; return __typia_transform__createStandardSchema._createStandardSchema((input: any): import("typia").IValidation<Tables<"projects">> => {
    if (false === __is(input)) {
        errors = [];
        _report = (__typia_transform__validateReport._validateReport as any)(errors);
        ((input: any, _path: string, _exceptionable: boolean = true) => ("object" === typeof input && null !== input || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        })) && _vo0(input, _path + "", true) || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        }))(input, "$input", true);
        const success = 0 === errors.length;
        return success ? {
            success,
            data: input
        } : {
            success,
            errors,
            data: input
        } as any;
    }
    return {
        success: true,
        data: input
    } as any;
}); })();
const formationInsertValidator = (() => { const _io0 = (input: any): boolean => (undefined === input.created_at || "string" === typeof input.created_at) && (null === input.description || undefined === input.description || "string" === typeof input.description) && (null === input.duration || undefined === input.duration || "string" === typeof input.duration) && (null === input.extraLinks || undefined === input.extraLinks || "string" === typeof input.extraLinks || "number" === typeof input.extraLinks || "boolean" === typeof input.extraLinks || (Array.isArray(input.extraLinks) && (_ia0(input.extraLinks) || false) || "object" === typeof input.extraLinks && null !== input.extraLinks && false === Array.isArray(input.extraLinks) && _io1(input.extraLinks))) && (undefined === input.id || "number" === typeof input.id) && (null === input.image || undefined === input.image || "string" === typeof input.image) && (null === input.landingDescription || undefined === input.landingDescription || "string" === typeof input.landingDescription) && (null === input.location || undefined === input.location || "string" === typeof input.location) && (null === input.speciality || undefined === input.speciality || "string" === typeof input.speciality) && (null === input.technologies || undefined === input.technologies || "string" === typeof input.technologies || "number" === typeof input.technologies || "boolean" === typeof input.technologies || (Array.isArray(input.technologies) && (_ia0(input.technologies) || false) || "object" === typeof input.technologies && null !== input.technologies && false === Array.isArray(input.technologies) && _io1(input.technologies))) && (null === input.title || undefined === input.title || "string" === typeof input.title); const _io1 = (input: any): boolean => Object.keys(input).every((key: any) => {
    const value = input[key];
    if (undefined === value)
        return true;
    return null === value || undefined === value || "string" === typeof value || "number" === typeof value || "boolean" === typeof value || (Array.isArray(value) && (_ia0(value) || false) || "object" === typeof value && null !== value && false === Array.isArray(value) && _io1(value));
}); const _ia0 = (input: any): any => input.every((elem: any) => undefined !== elem && (null === elem || "string" === typeof elem || "number" === typeof elem || "boolean" === typeof elem || (Array.isArray(elem) && (_ia0(elem) || false) || "object" === typeof elem && null !== elem && false === Array.isArray(elem) && _io1(elem)))); const _vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.created_at || "string" === typeof input.created_at || _report(_exceptionable, {
        path: _path + ".created_at",
        expected: "(string | undefined)",
        value: input.created_at
    }), null === input.description || undefined === input.description || "string" === typeof input.description || _report(_exceptionable, {
        path: _path + ".description",
        expected: "(null | string | undefined)",
        value: input.description
    }), null === input.duration || undefined === input.duration || "string" === typeof input.duration || _report(_exceptionable, {
        path: _path + ".duration",
        expected: "(null | string | undefined)",
        value: input.duration
    }), null === input.extraLinks || undefined === input.extraLinks || "string" === typeof input.extraLinks || "number" === typeof input.extraLinks || "boolean" === typeof input.extraLinks || (Array.isArray(input.extraLinks) && (_va0(input.extraLinks, _path + ".extraLinks", true && _exceptionable) || _report(_exceptionable, {
        path: _path + ".extraLinks",
        expected: "Array<Json>",
        value: input.extraLinks
    })) || "object" === typeof input.extraLinks && null !== input.extraLinks && false === Array.isArray(input.extraLinks) && _vo1(input.extraLinks, _path + ".extraLinks", true && _exceptionable) || _report(_exceptionable, {
        path: _path + ".extraLinks",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
        value: input.extraLinks
    })) || _report(_exceptionable, {
        path: _path + ".extraLinks",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
        value: input.extraLinks
    }), undefined === input.id || "number" === typeof input.id || _report(_exceptionable, {
        path: _path + ".id",
        expected: "(number | undefined)",
        value: input.id
    }), null === input.image || undefined === input.image || "string" === typeof input.image || _report(_exceptionable, {
        path: _path + ".image",
        expected: "(null | string | undefined)",
        value: input.image
    }), null === input.landingDescription || undefined === input.landingDescription || "string" === typeof input.landingDescription || _report(_exceptionable, {
        path: _path + ".landingDescription",
        expected: "(null | string | undefined)",
        value: input.landingDescription
    }), null === input.location || undefined === input.location || "string" === typeof input.location || _report(_exceptionable, {
        path: _path + ".location",
        expected: "(null | string | undefined)",
        value: input.location
    }), null === input.speciality || undefined === input.speciality || "string" === typeof input.speciality || _report(_exceptionable, {
        path: _path + ".speciality",
        expected: "(null | string | undefined)",
        value: input.speciality
    }), null === input.technologies || undefined === input.technologies || "string" === typeof input.technologies || "number" === typeof input.technologies || "boolean" === typeof input.technologies || (Array.isArray(input.technologies) && (_va0(input.technologies, _path + ".technologies", true && _exceptionable) || _report(_exceptionable, {
        path: _path + ".technologies",
        expected: "Array<Json>",
        value: input.technologies
    })) || "object" === typeof input.technologies && null !== input.technologies && false === Array.isArray(input.technologies) && _vo1(input.technologies, _path + ".technologies", true && _exceptionable) || _report(_exceptionable, {
        path: _path + ".technologies",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
        value: input.technologies
    })) || _report(_exceptionable, {
        path: _path + ".technologies",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
        value: input.technologies
    }), null === input.title || undefined === input.title || "string" === typeof input.title || _report(_exceptionable, {
        path: _path + ".title",
        expected: "(null | string | undefined)",
        value: input.title
    })].every((flag: boolean) => flag); const _vo1 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [false === _exceptionable || Object.keys(input).map((key: any) => {
        const value = input[key];
        if (undefined === value)
            return true;
        return null === value || undefined === value || "string" === typeof value || "number" === typeof value || "boolean" === typeof value || (Array.isArray(value) && (_va0(value, _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key), true && _exceptionable) || _report(_exceptionable, {
            path: _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key),
            expected: "Array<Json>",
            value: value
        })) || "object" === typeof value && null !== value && false === Array.isArray(value) && _vo1(value, _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key), true && _exceptionable) || _report(_exceptionable, {
            path: _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key),
            expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
            value: value
        })) || _report(_exceptionable, {
            path: _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key),
            expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
            value: value
        });
    }).every((flag: boolean) => flag)].every((flag: boolean) => flag); const _va0 = (input: any, _path: string, _exceptionable: boolean = true): any => input.map((elem: any, _index2: number) => (undefined !== elem || _report(_exceptionable, {
    path: _path + "[" + _index2 + "]",
    expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
    value: elem
})) && (null === elem || "string" === typeof elem || "number" === typeof elem || "boolean" === typeof elem || (Array.isArray(elem) && (_va0(elem, _path + "[" + _index2 + "]", true && _exceptionable) || _report(_exceptionable, {
    path: _path + "[" + _index2 + "]",
    expected: "Array<Json>",
    value: elem
})) || "object" === typeof elem && null !== elem && false === Array.isArray(elem) && _vo1(elem, _path + "[" + _index2 + "]", true && _exceptionable) || _report(_exceptionable, {
    path: _path + "[" + _index2 + "]",
    expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
    value: elem
})) || _report(_exceptionable, {
    path: _path + "[" + _index2 + "]",
    expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
    value: elem
}))).every((flag: boolean) => flag); const __is = (input: any): input is TablesInsert<"formations"> => "object" === typeof input && null !== input && false === Array.isArray(input) && _io0(input); let errors: any; let _report: any; return __typia_transform__createStandardSchema._createStandardSchema((input: any): import("typia").IValidation<TablesInsert<"formations">> => {
    if (false === __is(input)) {
        errors = [];
        _report = (__typia_transform__validateReport._validateReport as any)(errors);
        ((input: any, _path: string, _exceptionable: boolean = true) => ("object" === typeof input && null !== input && false === Array.isArray(input) || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        })) && _vo0(input, _path + "", true) || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        }))(input, "$input", true);
        const success = 0 === errors.length;
        return success ? {
            success,
            data: input
        } : {
            success,
            errors,
            data: input
        } as any;
    }
    return {
        success: true,
        data: input
    } as any;
}); })();
const formationUpdateValidator = (() => { const _io0 = (input: any): boolean => (undefined === input.created_at || "string" === typeof input.created_at) && (null === input.description || undefined === input.description || "string" === typeof input.description) && (null === input.duration || undefined === input.duration || "string" === typeof input.duration) && (null === input.extraLinks || undefined === input.extraLinks || "string" === typeof input.extraLinks || "number" === typeof input.extraLinks || "boolean" === typeof input.extraLinks || (Array.isArray(input.extraLinks) && (_ia0(input.extraLinks) || false) || "object" === typeof input.extraLinks && null !== input.extraLinks && false === Array.isArray(input.extraLinks) && _io1(input.extraLinks))) && (undefined === input.id || "number" === typeof input.id) && (null === input.image || undefined === input.image || "string" === typeof input.image) && (null === input.landingDescription || undefined === input.landingDescription || "string" === typeof input.landingDescription) && (null === input.location || undefined === input.location || "string" === typeof input.location) && (null === input.speciality || undefined === input.speciality || "string" === typeof input.speciality) && (null === input.technologies || undefined === input.technologies || "string" === typeof input.technologies || "number" === typeof input.technologies || "boolean" === typeof input.technologies || (Array.isArray(input.technologies) && (_ia0(input.technologies) || false) || "object" === typeof input.technologies && null !== input.technologies && false === Array.isArray(input.technologies) && _io1(input.technologies))) && (null === input.title || undefined === input.title || "string" === typeof input.title); const _io1 = (input: any): boolean => Object.keys(input).every((key: any) => {
    const value = input[key];
    if (undefined === value)
        return true;
    return null === value || undefined === value || "string" === typeof value || "number" === typeof value || "boolean" === typeof value || (Array.isArray(value) && (_ia0(value) || false) || "object" === typeof value && null !== value && false === Array.isArray(value) && _io1(value));
}); const _ia0 = (input: any): any => input.every((elem: any) => undefined !== elem && (null === elem || "string" === typeof elem || "number" === typeof elem || "boolean" === typeof elem || (Array.isArray(elem) && (_ia0(elem) || false) || "object" === typeof elem && null !== elem && false === Array.isArray(elem) && _io1(elem)))); const _vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.created_at || "string" === typeof input.created_at || _report(_exceptionable, {
        path: _path + ".created_at",
        expected: "(string | undefined)",
        value: input.created_at
    }), null === input.description || undefined === input.description || "string" === typeof input.description || _report(_exceptionable, {
        path: _path + ".description",
        expected: "(null | string | undefined)",
        value: input.description
    }), null === input.duration || undefined === input.duration || "string" === typeof input.duration || _report(_exceptionable, {
        path: _path + ".duration",
        expected: "(null | string | undefined)",
        value: input.duration
    }), null === input.extraLinks || undefined === input.extraLinks || "string" === typeof input.extraLinks || "number" === typeof input.extraLinks || "boolean" === typeof input.extraLinks || (Array.isArray(input.extraLinks) && (_va0(input.extraLinks, _path + ".extraLinks", true && _exceptionable) || _report(_exceptionable, {
        path: _path + ".extraLinks",
        expected: "Array<Json>",
        value: input.extraLinks
    })) || "object" === typeof input.extraLinks && null !== input.extraLinks && false === Array.isArray(input.extraLinks) && _vo1(input.extraLinks, _path + ".extraLinks", true && _exceptionable) || _report(_exceptionable, {
        path: _path + ".extraLinks",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
        value: input.extraLinks
    })) || _report(_exceptionable, {
        path: _path + ".extraLinks",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
        value: input.extraLinks
    }), undefined === input.id || "number" === typeof input.id || _report(_exceptionable, {
        path: _path + ".id",
        expected: "(number | undefined)",
        value: input.id
    }), null === input.image || undefined === input.image || "string" === typeof input.image || _report(_exceptionable, {
        path: _path + ".image",
        expected: "(null | string | undefined)",
        value: input.image
    }), null === input.landingDescription || undefined === input.landingDescription || "string" === typeof input.landingDescription || _report(_exceptionable, {
        path: _path + ".landingDescription",
        expected: "(null | string | undefined)",
        value: input.landingDescription
    }), null === input.location || undefined === input.location || "string" === typeof input.location || _report(_exceptionable, {
        path: _path + ".location",
        expected: "(null | string | undefined)",
        value: input.location
    }), null === input.speciality || undefined === input.speciality || "string" === typeof input.speciality || _report(_exceptionable, {
        path: _path + ".speciality",
        expected: "(null | string | undefined)",
        value: input.speciality
    }), null === input.technologies || undefined === input.technologies || "string" === typeof input.technologies || "number" === typeof input.technologies || "boolean" === typeof input.technologies || (Array.isArray(input.technologies) && (_va0(input.technologies, _path + ".technologies", true && _exceptionable) || _report(_exceptionable, {
        path: _path + ".technologies",
        expected: "Array<Json>",
        value: input.technologies
    })) || "object" === typeof input.technologies && null !== input.technologies && false === Array.isArray(input.technologies) && _vo1(input.technologies, _path + ".technologies", true && _exceptionable) || _report(_exceptionable, {
        path: _path + ".technologies",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
        value: input.technologies
    })) || _report(_exceptionable, {
        path: _path + ".technologies",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
        value: input.technologies
    }), null === input.title || undefined === input.title || "string" === typeof input.title || _report(_exceptionable, {
        path: _path + ".title",
        expected: "(null | string | undefined)",
        value: input.title
    })].every((flag: boolean) => flag); const _vo1 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [false === _exceptionable || Object.keys(input).map((key: any) => {
        const value = input[key];
        if (undefined === value)
            return true;
        return null === value || undefined === value || "string" === typeof value || "number" === typeof value || "boolean" === typeof value || (Array.isArray(value) && (_va0(value, _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key), true && _exceptionable) || _report(_exceptionable, {
            path: _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key),
            expected: "Array<Json>",
            value: value
        })) || "object" === typeof value && null !== value && false === Array.isArray(value) && _vo1(value, _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key), true && _exceptionable) || _report(_exceptionable, {
            path: _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key),
            expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
            value: value
        })) || _report(_exceptionable, {
            path: _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key),
            expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
            value: value
        });
    }).every((flag: boolean) => flag)].every((flag: boolean) => flag); const _va0 = (input: any, _path: string, _exceptionable: boolean = true): any => input.map((elem: any, _index2: number) => (undefined !== elem || _report(_exceptionable, {
    path: _path + "[" + _index2 + "]",
    expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
    value: elem
})) && (null === elem || "string" === typeof elem || "number" === typeof elem || "boolean" === typeof elem || (Array.isArray(elem) && (_va0(elem, _path + "[" + _index2 + "]", true && _exceptionable) || _report(_exceptionable, {
    path: _path + "[" + _index2 + "]",
    expected: "Array<Json>",
    value: elem
})) || "object" === typeof elem && null !== elem && false === Array.isArray(elem) && _vo1(elem, _path + "[" + _index2 + "]", true && _exceptionable) || _report(_exceptionable, {
    path: _path + "[" + _index2 + "]",
    expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
    value: elem
})) || _report(_exceptionable, {
    path: _path + "[" + _index2 + "]",
    expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
    value: elem
}))).every((flag: boolean) => flag); const __is = (input: any): input is TablesUpdate<"formations"> => "object" === typeof input && null !== input && false === Array.isArray(input) && _io0(input); let errors: any; let _report: any; return __typia_transform__createStandardSchema._createStandardSchema((input: any): import("typia").IValidation<TablesUpdate<"formations">> => {
    if (false === __is(input)) {
        errors = [];
        _report = (__typia_transform__validateReport._validateReport as any)(errors);
        ((input: any, _path: string, _exceptionable: boolean = true) => ("object" === typeof input && null !== input && false === Array.isArray(input) || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        })) && _vo0(input, _path + "", true) || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        }))(input, "$input", true);
        const success = 0 === errors.length;
        return success ? {
            success,
            data: input
        } : {
            success,
            errors,
            data: input
        } as any;
    }
    return {
        success: true,
        data: input
    } as any;
}); })();
const formationValidator = (() => { const _io0 = (input: any): boolean => "string" === typeof input.created_at && (null === input.description || "string" === typeof input.description) && (null === input.duration || "string" === typeof input.duration) && (undefined !== input.extraLinks && (null === input.extraLinks || "string" === typeof input.extraLinks || "number" === typeof input.extraLinks || "boolean" === typeof input.extraLinks || (Array.isArray(input.extraLinks) && (_ia0(input.extraLinks) || false) || "object" === typeof input.extraLinks && null !== input.extraLinks && false === Array.isArray(input.extraLinks) && _io1(input.extraLinks)))) && "number" === typeof input.id && (null === input.image || "string" === typeof input.image) && (null === input.landingDescription || "string" === typeof input.landingDescription) && (null === input.location || "string" === typeof input.location) && (null === input.speciality || "string" === typeof input.speciality) && (undefined !== input.technologies && (null === input.technologies || "string" === typeof input.technologies || "number" === typeof input.technologies || "boolean" === typeof input.technologies || (Array.isArray(input.technologies) && (_ia0(input.technologies) || false) || "object" === typeof input.technologies && null !== input.technologies && false === Array.isArray(input.technologies) && _io1(input.technologies)))) && (null === input.title || "string" === typeof input.title); const _io1 = (input: any): boolean => Object.keys(input).every((key: any) => {
    const value = input[key];
    if (undefined === value)
        return true;
    return null === value || undefined === value || "string" === typeof value || "number" === typeof value || "boolean" === typeof value || (Array.isArray(value) && (_ia0(value) || false) || "object" === typeof value && null !== value && false === Array.isArray(value) && _io1(value));
}); const _ia0 = (input: any): any => input.every((elem: any) => undefined !== elem && (null === elem || "string" === typeof elem || "number" === typeof elem || "boolean" === typeof elem || (Array.isArray(elem) && (_ia0(elem) || false) || "object" === typeof elem && null !== elem && false === Array.isArray(elem) && _io1(elem)))); const _vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.created_at || _report(_exceptionable, {
        path: _path + ".created_at",
        expected: "string",
        value: input.created_at
    }), null === input.description || "string" === typeof input.description || _report(_exceptionable, {
        path: _path + ".description",
        expected: "(null | string)",
        value: input.description
    }), null === input.duration || "string" === typeof input.duration || _report(_exceptionable, {
        path: _path + ".duration",
        expected: "(null | string)",
        value: input.duration
    }), (undefined !== input.extraLinks || _report(_exceptionable, {
        path: _path + ".extraLinks",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
        value: input.extraLinks
    })) && (null === input.extraLinks || "string" === typeof input.extraLinks || "number" === typeof input.extraLinks || "boolean" === typeof input.extraLinks || (Array.isArray(input.extraLinks) && (_va0(input.extraLinks, _path + ".extraLinks", true && _exceptionable) || _report(_exceptionable, {
        path: _path + ".extraLinks",
        expected: "Array<Json>",
        value: input.extraLinks
    })) || "object" === typeof input.extraLinks && null !== input.extraLinks && false === Array.isArray(input.extraLinks) && _vo1(input.extraLinks, _path + ".extraLinks", true && _exceptionable) || _report(_exceptionable, {
        path: _path + ".extraLinks",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
        value: input.extraLinks
    })) || _report(_exceptionable, {
        path: _path + ".extraLinks",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
        value: input.extraLinks
    })), "number" === typeof input.id || _report(_exceptionable, {
        path: _path + ".id",
        expected: "number",
        value: input.id
    }), null === input.image || "string" === typeof input.image || _report(_exceptionable, {
        path: _path + ".image",
        expected: "(null | string)",
        value: input.image
    }), null === input.landingDescription || "string" === typeof input.landingDescription || _report(_exceptionable, {
        path: _path + ".landingDescription",
        expected: "(null | string)",
        value: input.landingDescription
    }), null === input.location || "string" === typeof input.location || _report(_exceptionable, {
        path: _path + ".location",
        expected: "(null | string)",
        value: input.location
    }), null === input.speciality || "string" === typeof input.speciality || _report(_exceptionable, {
        path: _path + ".speciality",
        expected: "(null | string)",
        value: input.speciality
    }), (undefined !== input.technologies || _report(_exceptionable, {
        path: _path + ".technologies",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
        value: input.technologies
    })) && (null === input.technologies || "string" === typeof input.technologies || "number" === typeof input.technologies || "boolean" === typeof input.technologies || (Array.isArray(input.technologies) && (_va0(input.technologies, _path + ".technologies", true && _exceptionable) || _report(_exceptionable, {
        path: _path + ".technologies",
        expected: "Array<Json>",
        value: input.technologies
    })) || "object" === typeof input.technologies && null !== input.technologies && false === Array.isArray(input.technologies) && _vo1(input.technologies, _path + ".technologies", true && _exceptionable) || _report(_exceptionable, {
        path: _path + ".technologies",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
        value: input.technologies
    })) || _report(_exceptionable, {
        path: _path + ".technologies",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
        value: input.technologies
    })), null === input.title || "string" === typeof input.title || _report(_exceptionable, {
        path: _path + ".title",
        expected: "(null | string)",
        value: input.title
    })].every((flag: boolean) => flag); const _vo1 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [false === _exceptionable || Object.keys(input).map((key: any) => {
        const value = input[key];
        if (undefined === value)
            return true;
        return null === value || undefined === value || "string" === typeof value || "number" === typeof value || "boolean" === typeof value || (Array.isArray(value) && (_va0(value, _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key), true && _exceptionable) || _report(_exceptionable, {
            path: _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key),
            expected: "Array<Json>",
            value: value
        })) || "object" === typeof value && null !== value && false === Array.isArray(value) && _vo1(value, _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key), true && _exceptionable) || _report(_exceptionable, {
            path: _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key),
            expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
            value: value
        })) || _report(_exceptionable, {
            path: _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key),
            expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
            value: value
        });
    }).every((flag: boolean) => flag)].every((flag: boolean) => flag); const _va0 = (input: any, _path: string, _exceptionable: boolean = true): any => input.map((elem: any, _index2: number) => (undefined !== elem || _report(_exceptionable, {
    path: _path + "[" + _index2 + "]",
    expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
    value: elem
})) && (null === elem || "string" === typeof elem || "number" === typeof elem || "boolean" === typeof elem || (Array.isArray(elem) && (_va0(elem, _path + "[" + _index2 + "]", true && _exceptionable) || _report(_exceptionable, {
    path: _path + "[" + _index2 + "]",
    expected: "Array<Json>",
    value: elem
})) || "object" === typeof elem && null !== elem && false === Array.isArray(elem) && _vo1(elem, _path + "[" + _index2 + "]", true && _exceptionable) || _report(_exceptionable, {
    path: _path + "[" + _index2 + "]",
    expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
    value: elem
})) || _report(_exceptionable, {
    path: _path + "[" + _index2 + "]",
    expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
    value: elem
}))).every((flag: boolean) => flag); const __is = (input: any): input is Tables<"formations"> => "object" === typeof input && null !== input && _io0(input); let errors: any; let _report: any; return __typia_transform__createStandardSchema._createStandardSchema((input: any): import("typia").IValidation<Tables<"formations">> => {
    if (false === __is(input)) {
        errors = [];
        _report = (__typia_transform__validateReport._validateReport as any)(errors);
        ((input: any, _path: string, _exceptionable: boolean = true) => ("object" === typeof input && null !== input || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        })) && _vo0(input, _path + "", true) || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        }))(input, "$input", true);
        const success = 0 === errors.length;
        return success ? {
            success,
            data: input
        } : {
            success,
            errors,
            data: input
        } as any;
    }
    return {
        success: true,
        data: input
    } as any;
}); })();
const skillInsertValidator = (() => { const _io0 = (input: any): boolean => (undefined === input.created_at || "string" === typeof input.created_at) && (null === input.description || undefined === input.description || "string" === typeof input.description) && (undefined === input.id || "number" === typeof input.id) && (null === input.level || undefined === input.level || "number" === typeof input.level) && (null === input.name || undefined === input.name || "string" === typeof input.name); const _vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.created_at || "string" === typeof input.created_at || _report(_exceptionable, {
        path: _path + ".created_at",
        expected: "(string | undefined)",
        value: input.created_at
    }), null === input.description || undefined === input.description || "string" === typeof input.description || _report(_exceptionable, {
        path: _path + ".description",
        expected: "(null | string | undefined)",
        value: input.description
    }), undefined === input.id || "number" === typeof input.id || _report(_exceptionable, {
        path: _path + ".id",
        expected: "(number | undefined)",
        value: input.id
    }), null === input.level || undefined === input.level || "number" === typeof input.level || _report(_exceptionable, {
        path: _path + ".level",
        expected: "(null | number | undefined)",
        value: input.level
    }), null === input.name || undefined === input.name || "string" === typeof input.name || _report(_exceptionable, {
        path: _path + ".name",
        expected: "(null | string | undefined)",
        value: input.name
    })].every((flag: boolean) => flag); const __is = (input: any): input is TablesInsert<"skills"> => "object" === typeof input && null !== input && false === Array.isArray(input) && _io0(input); let errors: any; let _report: any; return __typia_transform__createStandardSchema._createStandardSchema((input: any): import("typia").IValidation<TablesInsert<"skills">> => {
    if (false === __is(input)) {
        errors = [];
        _report = (__typia_transform__validateReport._validateReport as any)(errors);
        ((input: any, _path: string, _exceptionable: boolean = true) => ("object" === typeof input && null !== input && false === Array.isArray(input) || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        })) && _vo0(input, _path + "", true) || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        }))(input, "$input", true);
        const success = 0 === errors.length;
        return success ? {
            success,
            data: input
        } : {
            success,
            errors,
            data: input
        } as any;
    }
    return {
        success: true,
        data: input
    } as any;
}); })();
const skillUpdateValidator = (() => { const _io0 = (input: any): boolean => (undefined === input.created_at || "string" === typeof input.created_at) && (null === input.description || undefined === input.description || "string" === typeof input.description) && (undefined === input.id || "number" === typeof input.id) && (null === input.level || undefined === input.level || "number" === typeof input.level) && (null === input.name || undefined === input.name || "string" === typeof input.name); const _vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.created_at || "string" === typeof input.created_at || _report(_exceptionable, {
        path: _path + ".created_at",
        expected: "(string | undefined)",
        value: input.created_at
    }), null === input.description || undefined === input.description || "string" === typeof input.description || _report(_exceptionable, {
        path: _path + ".description",
        expected: "(null | string | undefined)",
        value: input.description
    }), undefined === input.id || "number" === typeof input.id || _report(_exceptionable, {
        path: _path + ".id",
        expected: "(number | undefined)",
        value: input.id
    }), null === input.level || undefined === input.level || "number" === typeof input.level || _report(_exceptionable, {
        path: _path + ".level",
        expected: "(null | number | undefined)",
        value: input.level
    }), null === input.name || undefined === input.name || "string" === typeof input.name || _report(_exceptionable, {
        path: _path + ".name",
        expected: "(null | string | undefined)",
        value: input.name
    })].every((flag: boolean) => flag); const __is = (input: any): input is TablesUpdate<"skills"> => "object" === typeof input && null !== input && false === Array.isArray(input) && _io0(input); let errors: any; let _report: any; return __typia_transform__createStandardSchema._createStandardSchema((input: any): import("typia").IValidation<TablesUpdate<"skills">> => {
    if (false === __is(input)) {
        errors = [];
        _report = (__typia_transform__validateReport._validateReport as any)(errors);
        ((input: any, _path: string, _exceptionable: boolean = true) => ("object" === typeof input && null !== input && false === Array.isArray(input) || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        })) && _vo0(input, _path + "", true) || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        }))(input, "$input", true);
        const success = 0 === errors.length;
        return success ? {
            success,
            data: input
        } : {
            success,
            errors,
            data: input
        } as any;
    }
    return {
        success: true,
        data: input
    } as any;
}); })();
const skillValidator = (() => { const _io0 = (input: any): boolean => "string" === typeof input.created_at && (null === input.description || "string" === typeof input.description) && "number" === typeof input.id && (null === input.level || "number" === typeof input.level) && (null === input.name || "string" === typeof input.name); const _vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.created_at || _report(_exceptionable, {
        path: _path + ".created_at",
        expected: "string",
        value: input.created_at
    }), null === input.description || "string" === typeof input.description || _report(_exceptionable, {
        path: _path + ".description",
        expected: "(null | string)",
        value: input.description
    }), "number" === typeof input.id || _report(_exceptionable, {
        path: _path + ".id",
        expected: "number",
        value: input.id
    }), null === input.level || "number" === typeof input.level || _report(_exceptionable, {
        path: _path + ".level",
        expected: "(null | number)",
        value: input.level
    }), null === input.name || "string" === typeof input.name || _report(_exceptionable, {
        path: _path + ".name",
        expected: "(null | string)",
        value: input.name
    })].every((flag: boolean) => flag); const __is = (input: any): input is Tables<"skills"> => "object" === typeof input && null !== input && _io0(input); let errors: any; let _report: any; return __typia_transform__createStandardSchema._createStandardSchema((input: any): import("typia").IValidation<Tables<"skills">> => {
    if (false === __is(input)) {
        errors = [];
        _report = (__typia_transform__validateReport._validateReport as any)(errors);
        ((input: any, _path: string, _exceptionable: boolean = true) => ("object" === typeof input && null !== input || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        })) && _vo0(input, _path + "", true) || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        }))(input, "$input", true);
        const success = 0 === errors.length;
        return success ? {
            success,
            data: input
        } : {
            success,
            errors,
            data: input
        } as any;
    }
    return {
        success: true,
        data: input
    } as any;
}); })();
const messageInsertValidator = (() => { const _io0 = (input: any): boolean => (null === input.content || undefined === input.content || "string" === typeof input.content) && (undefined === input.created_at || "string" === typeof input.created_at) && (undefined === input.id || "number" === typeof input.id) && (null === input.name || undefined === input.name || "string" === typeof input.name) && (null === input.published || undefined === input.published || "boolean" === typeof input.published); const _vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [null === input.content || undefined === input.content || "string" === typeof input.content || _report(_exceptionable, {
        path: _path + ".content",
        expected: "(null | string | undefined)",
        value: input.content
    }), undefined === input.created_at || "string" === typeof input.created_at || _report(_exceptionable, {
        path: _path + ".created_at",
        expected: "(string | undefined)",
        value: input.created_at
    }), undefined === input.id || "number" === typeof input.id || _report(_exceptionable, {
        path: _path + ".id",
        expected: "(number | undefined)",
        value: input.id
    }), null === input.name || undefined === input.name || "string" === typeof input.name || _report(_exceptionable, {
        path: _path + ".name",
        expected: "(null | string | undefined)",
        value: input.name
    }), null === input.published || undefined === input.published || "boolean" === typeof input.published || _report(_exceptionable, {
        path: _path + ".published",
        expected: "(boolean | null | undefined)",
        value: input.published
    })].every((flag: boolean) => flag); const __is = (input: any): input is TablesInsert<"livredor"> => "object" === typeof input && null !== input && false === Array.isArray(input) && _io0(input); let errors: any; let _report: any; return __typia_transform__createStandardSchema._createStandardSchema((input: any): import("typia").IValidation<TablesInsert<"livredor">> => {
    if (false === __is(input)) {
        errors = [];
        _report = (__typia_transform__validateReport._validateReport as any)(errors);
        ((input: any, _path: string, _exceptionable: boolean = true) => ("object" === typeof input && null !== input && false === Array.isArray(input) || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        })) && _vo0(input, _path + "", true) || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        }))(input, "$input", true);
        const success = 0 === errors.length;
        return success ? {
            success,
            data: input
        } : {
            success,
            errors,
            data: input
        } as any;
    }
    return {
        success: true,
        data: input
    } as any;
}); })();
const messageValidator = (() => { const _io0 = (input: any): boolean => (null === input.content || "string" === typeof input.content) && "string" === typeof input.created_at && "number" === typeof input.id && (null === input.name || "string" === typeof input.name) && (null === input.published || "boolean" === typeof input.published); const _vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [null === input.content || "string" === typeof input.content || _report(_exceptionable, {
        path: _path + ".content",
        expected: "(null | string)",
        value: input.content
    }), "string" === typeof input.created_at || _report(_exceptionable, {
        path: _path + ".created_at",
        expected: "string",
        value: input.created_at
    }), "number" === typeof input.id || _report(_exceptionable, {
        path: _path + ".id",
        expected: "number",
        value: input.id
    }), null === input.name || "string" === typeof input.name || _report(_exceptionable, {
        path: _path + ".name",
        expected: "(null | string)",
        value: input.name
    }), null === input.published || "boolean" === typeof input.published || _report(_exceptionable, {
        path: _path + ".published",
        expected: "(boolean | null)",
        value: input.published
    })].every((flag: boolean) => flag); const __is = (input: any): input is Tables<"livredor"> => "object" === typeof input && null !== input && _io0(input); let errors: any; let _report: any; return __typia_transform__createStandardSchema._createStandardSchema((input: any): import("typia").IValidation<Tables<"livredor">> => {
    if (false === __is(input)) {
        errors = [];
        _report = (__typia_transform__validateReport._validateReport as any)(errors);
        ((input: any, _path: string, _exceptionable: boolean = true) => ("object" === typeof input && null !== input || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        })) && _vo0(input, _path + "", true) || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        }))(input, "$input", true);
        const success = 0 === errors.length;
        return success ? {
            success,
            data: input
        } : {
            success,
            errors,
            data: input
        } as any;
    }
    return {
        success: true,
        data: input
    } as any;
}); })();
const experienceInsertValidator = (() => { const _io0 = (input: any): boolean => (null === input.created_at || undefined === input.created_at || "string" === typeof input.created_at) && (null === input.description || undefined === input.description || "string" === typeof input.description) && (null === input.duration || undefined === input.duration || "string" === typeof input.duration) && (null === input.extraLinks || undefined === input.extraLinks || "string" === typeof input.extraLinks || "number" === typeof input.extraLinks || "boolean" === typeof input.extraLinks || (Array.isArray(input.extraLinks) && (_ia0(input.extraLinks) || false) || "object" === typeof input.extraLinks && null !== input.extraLinks && false === Array.isArray(input.extraLinks) && _io1(input.extraLinks))) && (undefined === input.id || "number" === typeof input.id) && (null === input.image || undefined === input.image || "string" === typeof input.image) && (null === input.landingDescription || undefined === input.landingDescription || "string" === typeof input.landingDescription) && (null === input.location || undefined === input.location || "string" === typeof input.location) && (null === input.technologies || undefined === input.technologies || "string" === typeof input.technologies || "number" === typeof input.technologies || "boolean" === typeof input.technologies || (Array.isArray(input.technologies) && (_ia0(input.technologies) || false) || "object" === typeof input.technologies && null !== input.technologies && false === Array.isArray(input.technologies) && _io1(input.technologies))) && (null === input.title || undefined === input.title || "string" === typeof input.title) && (null === input.type || undefined === input.type || "string" === typeof input.type); const _io1 = (input: any): boolean => Object.keys(input).every((key: any) => {
    const value = input[key];
    if (undefined === value)
        return true;
    return null === value || undefined === value || "string" === typeof value || "number" === typeof value || "boolean" === typeof value || (Array.isArray(value) && (_ia0(value) || false) || "object" === typeof value && null !== value && false === Array.isArray(value) && _io1(value));
}); const _ia0 = (input: any): any => input.every((elem: any) => undefined !== elem && (null === elem || "string" === typeof elem || "number" === typeof elem || "boolean" === typeof elem || (Array.isArray(elem) && (_ia0(elem) || false) || "object" === typeof elem && null !== elem && false === Array.isArray(elem) && _io1(elem)))); const _vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [null === input.created_at || undefined === input.created_at || "string" === typeof input.created_at || _report(_exceptionable, {
        path: _path + ".created_at",
        expected: "(null | string | undefined)",
        value: input.created_at
    }), null === input.description || undefined === input.description || "string" === typeof input.description || _report(_exceptionable, {
        path: _path + ".description",
        expected: "(null | string | undefined)",
        value: input.description
    }), null === input.duration || undefined === input.duration || "string" === typeof input.duration || _report(_exceptionable, {
        path: _path + ".duration",
        expected: "(null | string | undefined)",
        value: input.duration
    }), null === input.extraLinks || undefined === input.extraLinks || "string" === typeof input.extraLinks || "number" === typeof input.extraLinks || "boolean" === typeof input.extraLinks || (Array.isArray(input.extraLinks) && (_va0(input.extraLinks, _path + ".extraLinks", true && _exceptionable) || _report(_exceptionable, {
        path: _path + ".extraLinks",
        expected: "Array<Json>",
        value: input.extraLinks
    })) || "object" === typeof input.extraLinks && null !== input.extraLinks && false === Array.isArray(input.extraLinks) && _vo1(input.extraLinks, _path + ".extraLinks", true && _exceptionable) || _report(_exceptionable, {
        path: _path + ".extraLinks",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
        value: input.extraLinks
    })) || _report(_exceptionable, {
        path: _path + ".extraLinks",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
        value: input.extraLinks
    }), undefined === input.id || "number" === typeof input.id || _report(_exceptionable, {
        path: _path + ".id",
        expected: "(number | undefined)",
        value: input.id
    }), null === input.image || undefined === input.image || "string" === typeof input.image || _report(_exceptionable, {
        path: _path + ".image",
        expected: "(null | string | undefined)",
        value: input.image
    }), null === input.landingDescription || undefined === input.landingDescription || "string" === typeof input.landingDescription || _report(_exceptionable, {
        path: _path + ".landingDescription",
        expected: "(null | string | undefined)",
        value: input.landingDescription
    }), null === input.location || undefined === input.location || "string" === typeof input.location || _report(_exceptionable, {
        path: _path + ".location",
        expected: "(null | string | undefined)",
        value: input.location
    }), null === input.technologies || undefined === input.technologies || "string" === typeof input.technologies || "number" === typeof input.technologies || "boolean" === typeof input.technologies || (Array.isArray(input.technologies) && (_va0(input.technologies, _path + ".technologies", true && _exceptionable) || _report(_exceptionable, {
        path: _path + ".technologies",
        expected: "Array<Json>",
        value: input.technologies
    })) || "object" === typeof input.technologies && null !== input.technologies && false === Array.isArray(input.technologies) && _vo1(input.technologies, _path + ".technologies", true && _exceptionable) || _report(_exceptionable, {
        path: _path + ".technologies",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
        value: input.technologies
    })) || _report(_exceptionable, {
        path: _path + ".technologies",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
        value: input.technologies
    }), null === input.title || undefined === input.title || "string" === typeof input.title || _report(_exceptionable, {
        path: _path + ".title",
        expected: "(null | string | undefined)",
        value: input.title
    }), null === input.type || undefined === input.type || "string" === typeof input.type || _report(_exceptionable, {
        path: _path + ".type",
        expected: "(null | string | undefined)",
        value: input.type
    })].every((flag: boolean) => flag); const _vo1 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [false === _exceptionable || Object.keys(input).map((key: any) => {
        const value = input[key];
        if (undefined === value)
            return true;
        return null === value || undefined === value || "string" === typeof value || "number" === typeof value || "boolean" === typeof value || (Array.isArray(value) && (_va0(value, _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key), true && _exceptionable) || _report(_exceptionable, {
            path: _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key),
            expected: "Array<Json>",
            value: value
        })) || "object" === typeof value && null !== value && false === Array.isArray(value) && _vo1(value, _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key), true && _exceptionable) || _report(_exceptionable, {
            path: _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key),
            expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
            value: value
        })) || _report(_exceptionable, {
            path: _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key),
            expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
            value: value
        });
    }).every((flag: boolean) => flag)].every((flag: boolean) => flag); const _va0 = (input: any, _path: string, _exceptionable: boolean = true): any => input.map((elem: any, _index2: number) => (undefined !== elem || _report(_exceptionable, {
    path: _path + "[" + _index2 + "]",
    expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
    value: elem
})) && (null === elem || "string" === typeof elem || "number" === typeof elem || "boolean" === typeof elem || (Array.isArray(elem) && (_va0(elem, _path + "[" + _index2 + "]", true && _exceptionable) || _report(_exceptionable, {
    path: _path + "[" + _index2 + "]",
    expected: "Array<Json>",
    value: elem
})) || "object" === typeof elem && null !== elem && false === Array.isArray(elem) && _vo1(elem, _path + "[" + _index2 + "]", true && _exceptionable) || _report(_exceptionable, {
    path: _path + "[" + _index2 + "]",
    expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
    value: elem
})) || _report(_exceptionable, {
    path: _path + "[" + _index2 + "]",
    expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
    value: elem
}))).every((flag: boolean) => flag); const __is = (input: any): input is TablesInsert<"experiences"> => "object" === typeof input && null !== input && false === Array.isArray(input) && _io0(input); let errors: any; let _report: any; return __typia_transform__createStandardSchema._createStandardSchema((input: any): import("typia").IValidation<TablesInsert<"experiences">> => {
    if (false === __is(input)) {
        errors = [];
        _report = (__typia_transform__validateReport._validateReport as any)(errors);
        ((input: any, _path: string, _exceptionable: boolean = true) => ("object" === typeof input && null !== input && false === Array.isArray(input) || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        })) && _vo0(input, _path + "", true) || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        }))(input, "$input", true);
        const success = 0 === errors.length;
        return success ? {
            success,
            data: input
        } : {
            success,
            errors,
            data: input
        } as any;
    }
    return {
        success: true,
        data: input
    } as any;
}); })();
const experienceUpdateValidator = (() => { const _io0 = (input: any): boolean => (null === input.created_at || undefined === input.created_at || "string" === typeof input.created_at) && (null === input.description || undefined === input.description || "string" === typeof input.description) && (null === input.duration || undefined === input.duration || "string" === typeof input.duration) && (null === input.extraLinks || undefined === input.extraLinks || "string" === typeof input.extraLinks || "number" === typeof input.extraLinks || "boolean" === typeof input.extraLinks || (Array.isArray(input.extraLinks) && (_ia0(input.extraLinks) || false) || "object" === typeof input.extraLinks && null !== input.extraLinks && false === Array.isArray(input.extraLinks) && _io1(input.extraLinks))) && (undefined === input.id || "number" === typeof input.id) && (null === input.image || undefined === input.image || "string" === typeof input.image) && (null === input.landingDescription || undefined === input.landingDescription || "string" === typeof input.landingDescription) && (null === input.location || undefined === input.location || "string" === typeof input.location) && (null === input.technologies || undefined === input.technologies || "string" === typeof input.technologies || "number" === typeof input.technologies || "boolean" === typeof input.technologies || (Array.isArray(input.technologies) && (_ia0(input.technologies) || false) || "object" === typeof input.technologies && null !== input.technologies && false === Array.isArray(input.technologies) && _io1(input.technologies))) && (null === input.title || undefined === input.title || "string" === typeof input.title) && (null === input.type || undefined === input.type || "string" === typeof input.type); const _io1 = (input: any): boolean => Object.keys(input).every((key: any) => {
    const value = input[key];
    if (undefined === value)
        return true;
    return null === value || undefined === value || "string" === typeof value || "number" === typeof value || "boolean" === typeof value || (Array.isArray(value) && (_ia0(value) || false) || "object" === typeof value && null !== value && false === Array.isArray(value) && _io1(value));
}); const _ia0 = (input: any): any => input.every((elem: any) => undefined !== elem && (null === elem || "string" === typeof elem || "number" === typeof elem || "boolean" === typeof elem || (Array.isArray(elem) && (_ia0(elem) || false) || "object" === typeof elem && null !== elem && false === Array.isArray(elem) && _io1(elem)))); const _vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [null === input.created_at || undefined === input.created_at || "string" === typeof input.created_at || _report(_exceptionable, {
        path: _path + ".created_at",
        expected: "(null | string | undefined)",
        value: input.created_at
    }), null === input.description || undefined === input.description || "string" === typeof input.description || _report(_exceptionable, {
        path: _path + ".description",
        expected: "(null | string | undefined)",
        value: input.description
    }), null === input.duration || undefined === input.duration || "string" === typeof input.duration || _report(_exceptionable, {
        path: _path + ".duration",
        expected: "(null | string | undefined)",
        value: input.duration
    }), null === input.extraLinks || undefined === input.extraLinks || "string" === typeof input.extraLinks || "number" === typeof input.extraLinks || "boolean" === typeof input.extraLinks || (Array.isArray(input.extraLinks) && (_va0(input.extraLinks, _path + ".extraLinks", true && _exceptionable) || _report(_exceptionable, {
        path: _path + ".extraLinks",
        expected: "Array<Json>",
        value: input.extraLinks
    })) || "object" === typeof input.extraLinks && null !== input.extraLinks && false === Array.isArray(input.extraLinks) && _vo1(input.extraLinks, _path + ".extraLinks", true && _exceptionable) || _report(_exceptionable, {
        path: _path + ".extraLinks",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
        value: input.extraLinks
    })) || _report(_exceptionable, {
        path: _path + ".extraLinks",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
        value: input.extraLinks
    }), undefined === input.id || "number" === typeof input.id || _report(_exceptionable, {
        path: _path + ".id",
        expected: "(number | undefined)",
        value: input.id
    }), null === input.image || undefined === input.image || "string" === typeof input.image || _report(_exceptionable, {
        path: _path + ".image",
        expected: "(null | string | undefined)",
        value: input.image
    }), null === input.landingDescription || undefined === input.landingDescription || "string" === typeof input.landingDescription || _report(_exceptionable, {
        path: _path + ".landingDescription",
        expected: "(null | string | undefined)",
        value: input.landingDescription
    }), null === input.location || undefined === input.location || "string" === typeof input.location || _report(_exceptionable, {
        path: _path + ".location",
        expected: "(null | string | undefined)",
        value: input.location
    }), null === input.technologies || undefined === input.technologies || "string" === typeof input.technologies || "number" === typeof input.technologies || "boolean" === typeof input.technologies || (Array.isArray(input.technologies) && (_va0(input.technologies, _path + ".technologies", true && _exceptionable) || _report(_exceptionable, {
        path: _path + ".technologies",
        expected: "Array<Json>",
        value: input.technologies
    })) || "object" === typeof input.technologies && null !== input.technologies && false === Array.isArray(input.technologies) && _vo1(input.technologies, _path + ".technologies", true && _exceptionable) || _report(_exceptionable, {
        path: _path + ".technologies",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
        value: input.technologies
    })) || _report(_exceptionable, {
        path: _path + ".technologies",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
        value: input.technologies
    }), null === input.title || undefined === input.title || "string" === typeof input.title || _report(_exceptionable, {
        path: _path + ".title",
        expected: "(null | string | undefined)",
        value: input.title
    }), null === input.type || undefined === input.type || "string" === typeof input.type || _report(_exceptionable, {
        path: _path + ".type",
        expected: "(null | string | undefined)",
        value: input.type
    })].every((flag: boolean) => flag); const _vo1 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [false === _exceptionable || Object.keys(input).map((key: any) => {
        const value = input[key];
        if (undefined === value)
            return true;
        return null === value || undefined === value || "string" === typeof value || "number" === typeof value || "boolean" === typeof value || (Array.isArray(value) && (_va0(value, _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key), true && _exceptionable) || _report(_exceptionable, {
            path: _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key),
            expected: "Array<Json>",
            value: value
        })) || "object" === typeof value && null !== value && false === Array.isArray(value) && _vo1(value, _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key), true && _exceptionable) || _report(_exceptionable, {
            path: _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key),
            expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
            value: value
        })) || _report(_exceptionable, {
            path: _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key),
            expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
            value: value
        });
    }).every((flag: boolean) => flag)].every((flag: boolean) => flag); const _va0 = (input: any, _path: string, _exceptionable: boolean = true): any => input.map((elem: any, _index2: number) => (undefined !== elem || _report(_exceptionable, {
    path: _path + "[" + _index2 + "]",
    expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
    value: elem
})) && (null === elem || "string" === typeof elem || "number" === typeof elem || "boolean" === typeof elem || (Array.isArray(elem) && (_va0(elem, _path + "[" + _index2 + "]", true && _exceptionable) || _report(_exceptionable, {
    path: _path + "[" + _index2 + "]",
    expected: "Array<Json>",
    value: elem
})) || "object" === typeof elem && null !== elem && false === Array.isArray(elem) && _vo1(elem, _path + "[" + _index2 + "]", true && _exceptionable) || _report(_exceptionable, {
    path: _path + "[" + _index2 + "]",
    expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
    value: elem
})) || _report(_exceptionable, {
    path: _path + "[" + _index2 + "]",
    expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
    value: elem
}))).every((flag: boolean) => flag); const __is = (input: any): input is TablesUpdate<"experiences"> => "object" === typeof input && null !== input && false === Array.isArray(input) && _io0(input); let errors: any; let _report: any; return __typia_transform__createStandardSchema._createStandardSchema((input: any): import("typia").IValidation<TablesUpdate<"experiences">> => {
    if (false === __is(input)) {
        errors = [];
        _report = (__typia_transform__validateReport._validateReport as any)(errors);
        ((input: any, _path: string, _exceptionable: boolean = true) => ("object" === typeof input && null !== input && false === Array.isArray(input) || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        })) && _vo0(input, _path + "", true) || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        }))(input, "$input", true);
        const success = 0 === errors.length;
        return success ? {
            success,
            data: input
        } : {
            success,
            errors,
            data: input
        } as any;
    }
    return {
        success: true,
        data: input
    } as any;
}); })();
const experienceValidator = (() => { const _io0 = (input: any): boolean => (null === input.created_at || "string" === typeof input.created_at) && (null === input.description || "string" === typeof input.description) && (null === input.duration || "string" === typeof input.duration) && (undefined !== input.extraLinks && (null === input.extraLinks || "string" === typeof input.extraLinks || "number" === typeof input.extraLinks || "boolean" === typeof input.extraLinks || (Array.isArray(input.extraLinks) && (_ia0(input.extraLinks) || false) || "object" === typeof input.extraLinks && null !== input.extraLinks && false === Array.isArray(input.extraLinks) && _io1(input.extraLinks)))) && "number" === typeof input.id && (null === input.image || "string" === typeof input.image) && (null === input.landingDescription || "string" === typeof input.landingDescription) && (null === input.location || "string" === typeof input.location) && (undefined !== input.technologies && (null === input.technologies || "string" === typeof input.technologies || "number" === typeof input.technologies || "boolean" === typeof input.technologies || (Array.isArray(input.technologies) && (_ia0(input.technologies) || false) || "object" === typeof input.technologies && null !== input.technologies && false === Array.isArray(input.technologies) && _io1(input.technologies)))) && (null === input.title || "string" === typeof input.title) && (null === input.type || "string" === typeof input.type); const _io1 = (input: any): boolean => Object.keys(input).every((key: any) => {
    const value = input[key];
    if (undefined === value)
        return true;
    return null === value || undefined === value || "string" === typeof value || "number" === typeof value || "boolean" === typeof value || (Array.isArray(value) && (_ia0(value) || false) || "object" === typeof value && null !== value && false === Array.isArray(value) && _io1(value));
}); const _ia0 = (input: any): any => input.every((elem: any) => undefined !== elem && (null === elem || "string" === typeof elem || "number" === typeof elem || "boolean" === typeof elem || (Array.isArray(elem) && (_ia0(elem) || false) || "object" === typeof elem && null !== elem && false === Array.isArray(elem) && _io1(elem)))); const _vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [null === input.created_at || "string" === typeof input.created_at || _report(_exceptionable, {
        path: _path + ".created_at",
        expected: "(null | string)",
        value: input.created_at
    }), null === input.description || "string" === typeof input.description || _report(_exceptionable, {
        path: _path + ".description",
        expected: "(null | string)",
        value: input.description
    }), null === input.duration || "string" === typeof input.duration || _report(_exceptionable, {
        path: _path + ".duration",
        expected: "(null | string)",
        value: input.duration
    }), (undefined !== input.extraLinks || _report(_exceptionable, {
        path: _path + ".extraLinks",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
        value: input.extraLinks
    })) && (null === input.extraLinks || "string" === typeof input.extraLinks || "number" === typeof input.extraLinks || "boolean" === typeof input.extraLinks || (Array.isArray(input.extraLinks) && (_va0(input.extraLinks, _path + ".extraLinks", true && _exceptionable) || _report(_exceptionable, {
        path: _path + ".extraLinks",
        expected: "Array<Json>",
        value: input.extraLinks
    })) || "object" === typeof input.extraLinks && null !== input.extraLinks && false === Array.isArray(input.extraLinks) && _vo1(input.extraLinks, _path + ".extraLinks", true && _exceptionable) || _report(_exceptionable, {
        path: _path + ".extraLinks",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
        value: input.extraLinks
    })) || _report(_exceptionable, {
        path: _path + ".extraLinks",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
        value: input.extraLinks
    })), "number" === typeof input.id || _report(_exceptionable, {
        path: _path + ".id",
        expected: "number",
        value: input.id
    }), null === input.image || "string" === typeof input.image || _report(_exceptionable, {
        path: _path + ".image",
        expected: "(null | string)",
        value: input.image
    }), null === input.landingDescription || "string" === typeof input.landingDescription || _report(_exceptionable, {
        path: _path + ".landingDescription",
        expected: "(null | string)",
        value: input.landingDescription
    }), null === input.location || "string" === typeof input.location || _report(_exceptionable, {
        path: _path + ".location",
        expected: "(null | string)",
        value: input.location
    }), (undefined !== input.technologies || _report(_exceptionable, {
        path: _path + ".technologies",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
        value: input.technologies
    })) && (null === input.technologies || "string" === typeof input.technologies || "number" === typeof input.technologies || "boolean" === typeof input.technologies || (Array.isArray(input.technologies) && (_va0(input.technologies, _path + ".technologies", true && _exceptionable) || _report(_exceptionable, {
        path: _path + ".technologies",
        expected: "Array<Json>",
        value: input.technologies
    })) || "object" === typeof input.technologies && null !== input.technologies && false === Array.isArray(input.technologies) && _vo1(input.technologies, _path + ".technologies", true && _exceptionable) || _report(_exceptionable, {
        path: _path + ".technologies",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
        value: input.technologies
    })) || _report(_exceptionable, {
        path: _path + ".technologies",
        expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
        value: input.technologies
    })), null === input.title || "string" === typeof input.title || _report(_exceptionable, {
        path: _path + ".title",
        expected: "(null | string)",
        value: input.title
    }), null === input.type || "string" === typeof input.type || _report(_exceptionable, {
        path: _path + ".type",
        expected: "(null | string)",
        value: input.type
    })].every((flag: boolean) => flag); const _vo1 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [false === _exceptionable || Object.keys(input).map((key: any) => {
        const value = input[key];
        if (undefined === value)
            return true;
        return null === value || undefined === value || "string" === typeof value || "number" === typeof value || "boolean" === typeof value || (Array.isArray(value) && (_va0(value, _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key), true && _exceptionable) || _report(_exceptionable, {
            path: _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key),
            expected: "Array<Json>",
            value: value
        })) || "object" === typeof value && null !== value && false === Array.isArray(value) && _vo1(value, _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key), true && _exceptionable) || _report(_exceptionable, {
            path: _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key),
            expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
            value: value
        })) || _report(_exceptionable, {
            path: _path + __typia_transform__accessExpressionAsString._accessExpressionAsString(key),
            expected: "(Array<Json> | __type.o1 | boolean | null | number | string | undefined)",
            value: value
        });
    }).every((flag: boolean) => flag)].every((flag: boolean) => flag); const _va0 = (input: any, _path: string, _exceptionable: boolean = true): any => input.map((elem: any, _index2: number) => (undefined !== elem || _report(_exceptionable, {
    path: _path + "[" + _index2 + "]",
    expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
    value: elem
})) && (null === elem || "string" === typeof elem || "number" === typeof elem || "boolean" === typeof elem || (Array.isArray(elem) && (_va0(elem, _path + "[" + _index2 + "]", true && _exceptionable) || _report(_exceptionable, {
    path: _path + "[" + _index2 + "]",
    expected: "Array<Json>",
    value: elem
})) || "object" === typeof elem && null !== elem && false === Array.isArray(elem) && _vo1(elem, _path + "[" + _index2 + "]", true && _exceptionable) || _report(_exceptionable, {
    path: _path + "[" + _index2 + "]",
    expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
    value: elem
})) || _report(_exceptionable, {
    path: _path + "[" + _index2 + "]",
    expected: "(Array<Json> | __type.o1 | boolean | null | number | string)",
    value: elem
}))).every((flag: boolean) => flag); const __is = (input: any): input is Tables<"experiences"> => "object" === typeof input && null !== input && _io0(input); let errors: any; let _report: any; return __typia_transform__createStandardSchema._createStandardSchema((input: any): import("typia").IValidation<Tables<"experiences">> => {
    if (false === __is(input)) {
        errors = [];
        _report = (__typia_transform__validateReport._validateReport as any)(errors);
        ((input: any, _path: string, _exceptionable: boolean = true) => ("object" === typeof input && null !== input || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        })) && _vo0(input, _path + "", true) || _report(true, {
            path: _path + "",
            expected: "__type",
            value: input
        }))(input, "$input", true);
        const success = 0 === errors.length;
        return success ? {
            success,
            data: input
        } : {
            success,
            errors,
            data: input
        } as any;
    }
    return {
        success: true,
        data: input
    } as any;
}); })();
export { slugValidator, idValidator, blogInsertValidator, blogUpdateValidator, blogValidator, projectInsertValidator, projectUpdateValidator, projectValidator, formationInsertValidator, formationUpdateValidator, formationValidator, skillInsertValidator, skillUpdateValidator, skillValidator, messageInsertValidator, messageValidator, experienceInsertValidator, experienceUpdateValidator, experienceValidator };
