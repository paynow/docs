---
id: sourcedocs_java
title: Source Docs for Java Library
sidebar_label: Java
---

<h2>Class: webdev.core.CanFail</h2>

<div class="contentContainer">
  <ul class="inheritance">
    <li>java.lang.Object</li>
    <li>
      <ul class="inheritance">
        <li>webdev.core.CanFail</li>
      </ul>
    </li>
  </ul>
  <div class="description">
    <ul class="blockList">
      <li class="blockList">
        <dl>
          <dt>Direct Known Subclasses:</dt>
          <dd><a href="../../webdev/core/InitResponse.html" title="class in webdev.core">InitResponse</a>, <a href="../../webdev/core/StatusResponse.html"
              title="class in webdev.core">StatusResponse</a></dd>
        </dl>
        <hr>
        <br>
        <pre>public abstract class <span class="typeNameLabel">CanFail</span>
extends java.lang.Object</pre>
      </li>
    </ul>
  </div>
  <div class="summary">
    <ul class="blockList">
      <li class="blockList">
        <!-- =========== FIELD SUMMARY =========== -->
        <ul class="blockList">
          <li class="blockList"><a name="field.summary">
              <!--   -->
            </a>
            <h3>Field Summary</h3>
            <table class="memberSummary" border="0" cellpadding="3" cellspacing="0" summary="Field Summary table, listing fields, and an explanation">
              <caption><span>Fields</span><span class="tabEnd">&nbsp;</span></caption>
              <tr>
                <th class="colFirst" scope="col">Modifier and Type</th>
                <th class="colLast" scope="col">Field and Description</th>
              </tr>
              <tr class="altColor">
                <td class="colFirst"><code>private java.util.ArrayList&lt;java.lang.String&gt;</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/CanFail.html#Z:Z_errors">_errors</a></span></code>
                  <div class="block">The list of errors</div>
                </td>
              </tr>
            </table>
          </li>
        </ul>
        <!-- ======== CONSTRUCTOR SUMMARY ======== -->
        <ul class="blockList">
          <li class="blockList"><a name="constructor.summary">
              <!--   -->
            </a>
            <h3>Constructor Summary</h3>
            <table class="memberSummary" border="0" cellpadding="3" cellspacing="0" summary="Constructor Summary table, listing constructors, and an explanation">
              <caption><span>Constructors</span><span class="tabEnd">&nbsp;</span></caption>
              <tr>
                <th class="colOne" scope="col">Constructor and Description</th>
              </tr>
              <tr class="altColor">
                <td class="colOne"><code><span class="memberNameLink"><a href="../../webdev/core/CanFail.html#CanFail--">CanFail</a></span>()</code>&nbsp;</td>
              </tr>
            </table>
          </li>
        </ul>
        <!-- ========== METHOD SUMMARY =========== -->
        <ul class="blockList">
          <li class="blockList"><a name="method.summary">
              <!--   -->
            </a>
            <h3>Method Summary</h3>
            <table class="memberSummary" border="0" cellpadding="3" cellspacing="0" summary="Method Summary table, listing methods, and an explanation">
              <caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span
                  id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span
                  id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption>
              <tr>
                <th class="colFirst" scope="col">Modifier and Type</th>
                <th class="colLast" scope="col">Method and Description</th>
              </tr>
              <tr id="i0" class="altColor">
                <td class="colFirst"><code>java.lang.String</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/CanFail.html#Errors--">Errors</a></span>()</code>
                  <div class="block">Get the errors sent by Paynow</div>
                </td>
              </tr>
              <tr id="i1" class="rowColor">
                <td class="colFirst"><code>java.lang.String</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/CanFail.html#Errors-char-">Errors</a></span>(char&nbsp;separator)</code>
                  <div class="block">Get the errors sent by payment</div>
                </td>
              </tr>
              <tr id="i2" class="altColor">
                <td class="colFirst"><code>void</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/CanFail.html#Fail-java.lang.String-">Fail</a></span>(java.lang.String&nbsp;error)</code>
                  <div class="block">Throws an exception for critical errors and stores other non-critical errors</div>
                </td>
              </tr>
            </table>
            <ul class="blockList">
              <li class="blockList"><a name="methods.inherited.from.class.java.lang.Object">
                  <!--   -->
                </a>
                <h3>Methods inherited from class&nbsp;java.lang.Object</h3>
                <code>clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait</code></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="details">
    <ul class="blockList">
      <li class="blockList">
        <!-- ============ FIELD DETAIL =========== -->
        <ul class="blockList">
          <li class="blockList"><a name="field.detail">
              <!--   -->
            </a>
            <h3>Field Detail</h3>
            <a name="Z:Z_errors">
              <!--   -->
            </a>
            <ul class="blockListLast">
              <li class="blockList">
                <h4>_errors</h4>
                <pre>private final&nbsp;java.util.ArrayList&lt;java.lang.String&gt; _errors</pre>
                <div class="block">The list of errors</div>
              </li>
            </ul>
          </li>
        </ul>
        <!-- ========= CONSTRUCTOR DETAIL ======== -->
        <ul class="blockList">
          <li class="blockList"><a name="constructor.detail">
              <!--   -->
            </a>
            <h3>Constructor Detail</h3>
            <a name="CanFail--">
              <!--   -->
            </a>
            <ul class="blockListLast">
              <li class="blockList">
                <h4>CanFail</h4>
                <pre>public&nbsp;CanFail()</pre>
              </li>
            </ul>
          </li>
        </ul>
        <!-- ============ METHOD DETAIL ========== -->
        <ul class="blockList">
          <li class="blockList"><a name="method.detail">
              <!--   -->
            </a>
            <h3>Method Detail</h3>
            <a name="Fail-java.lang.String-">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>Fail</h4>
                <pre>public final&nbsp;void&nbsp;Fail(java.lang.String&nbsp;error)</pre>
                <div class="block">Throws an exception for critical errors and stores other non-critical errors</div>
                <dl>
                  <dt><span class="paramLabel">Parameters:</span></dt>
                  <dd><code>error</code> - </dd>
                  <dt><span class="throwsLabel">Throws:</span></dt>
                  <dd><code><a href="../../webdev/exceptions/InvalidIntegrationException.html" title="class in webdev.exceptions">InvalidIntegrationException</a></code></dd>
                </dl>
              </li>
            </ul>
            <a name="Errors--">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>Errors</h4>
                <pre>public final&nbsp;java.lang.String&nbsp;Errors()</pre>
                <div class="block">Get the errors sent by Paynow</div>
                <dl>
                  <dt><span class="returnLabel">Returns:</span></dt>
                </dl>
              </li>
            </ul>
            <a name="Errors-char-">
              <!--   -->
            </a>
            <ul class="blockListLast">
              <li class="blockList">
                <h4>Errors</h4>
                <pre>public final&nbsp;java.lang.String&nbsp;Errors(char&nbsp;separator)</pre>
                <div class="block">Get the errors sent by payment</div>
                <dl>
                  <dt><span class="paramLabel">Parameters:</span></dt>
                  <dd><code>separator</code> - </dd>
                  <dt><span class="returnLabel">Returns:</span></dt>
                  <dd>The errors from paynow</dd>
                </dl>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>

<h2>Class: webdev.core.Constants</h2>

<div class="contentContainer">
  <ul class="inheritance">
    <li>java.lang.Object</li>
    <li>
      <ul class="inheritance">
        <li>webdev.core.Constants</li>
      </ul>
    </li>
  </ul>
  <div class="description">
    <ul class="blockList">
      <li class="blockList">
        <hr>
        <br>
        <pre>public final class <span class="typeNameLabel">Constants</span>
extends java.lang.Object</pre>
      </li>
    </ul>
  </div>
  <div class="summary">
    <ul class="blockList">
      <li class="blockList">
        <!-- =========== FIELD SUMMARY =========== -->
        <ul class="blockList">
          <li class="blockList"><a name="field.summary">
              <!--   -->
            </a>
            <h3>Field Summary</h3>
            <table class="memberSummary" border="0" cellpadding="3" cellspacing="0" summary="Field Summary table, listing fields, and an explanation">
              <caption><span>Fields</span><span class="tabEnd">&nbsp;</span></caption>
              <tr>
                <th class="colFirst" scope="col">Modifier and Type</th>
                <th class="colLast" scope="col">Field and Description</th>
              </tr>
              <tr class="altColor">
                <td class="colFirst"><code>static java.lang.String</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/Constants.html#MobileMoneyMethodEcocash">MobileMoneyMethodEcocash</a></span></code>&nbsp;</td>
              </tr>
              <tr class="rowColor">
                <td class="colFirst"><code>static java.lang.String</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/Constants.html#ResponseError">ResponseError</a></span></code>&nbsp;</td>
              </tr>
              <tr class="altColor">
                <td class="colFirst"><code>static java.lang.String</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/Constants.html#ResponseInvalidId">ResponseInvalidId</a></span></code>&nbsp;</td>
              </tr>
              <tr class="rowColor">
                <td class="colFirst"><code>static java.lang.String</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/Constants.html#ResponseOk">ResponseOk</a></span></code>&nbsp;</td>
              </tr>
              <tr class="altColor">
                <td class="colFirst"><code>static java.lang.String</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/Constants.html#ResponsePaid">ResponsePaid</a></span></code>&nbsp;</td>
              </tr>
              <tr class="rowColor">
                <td class="colFirst"><code>static java.lang.String</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/Constants.html#UrlInitiateMobileTransaction">UrlInitiateMobileTransaction</a></span></code>&nbsp;</td>
              </tr>
              <tr class="altColor">
                <td class="colFirst"><code>static java.lang.String</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/Constants.html#UrlInitiateTransaction">UrlInitiateTransaction</a></span></code>&nbsp;</td>
              </tr>
            </table>
          </li>
        </ul>
        <!-- ======== CONSTRUCTOR SUMMARY ======== -->
        <ul class="blockList">
          <li class="blockList"><a name="constructor.summary">
              <!--   -->
            </a>
            <h3>Constructor Summary</h3>
            <table class="memberSummary" border="0" cellpadding="3" cellspacing="0" summary="Constructor Summary table, listing constructors, and an explanation">
              <caption><span>Constructors</span><span class="tabEnd">&nbsp;</span></caption>
              <tr>
                <th class="colOne" scope="col">Constructor and Description</th>
              </tr>
              <tr class="altColor">
                <td class="colOne"><code><span class="memberNameLink"><a href="../../webdev/core/Constants.html#Constants--">Constants</a></span>()</code>&nbsp;</td>
              </tr>
            </table>
          </li>
        </ul>
        <!-- ========== METHOD SUMMARY =========== -->
        <ul class="blockList">
          <li class="blockList"><a name="method.summary">
              <!--   -->
            </a>
            <h3>Method Summary</h3>
            <ul class="blockList">
              <li class="blockList"><a name="methods.inherited.from.class.java.lang.Object">
                  <!--   -->
                </a>
                <h3>Methods inherited from class&nbsp;java.lang.Object</h3>
                <code>clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait</code></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="details">
    <ul class="blockList">
      <li class="blockList">
        <!-- ============ FIELD DETAIL =========== -->
        <ul class="blockList">
          <li class="blockList"><a name="field.detail">
              <!--   -->
            </a>
            <h3>Field Detail</h3>
            <a name="ResponseOk">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>ResponseOk</h4>
                <pre>public static final&nbsp;java.lang.String ResponseOk</pre>
                <dl>
                  <dt><span class="seeLabel">See Also:</span></dt>
                  <dd><a href="../../constant-values.html#webdev.core.Constants.ResponseOk">Constant Field Values</a></dd>
                </dl>
              </li>
            </ul>
            <a name="ResponsePaid">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>ResponsePaid</h4>
                <pre>public static final&nbsp;java.lang.String ResponsePaid</pre>
                <dl>
                  <dt><span class="seeLabel">See Also:</span></dt>
                  <dd><a href="../../constant-values.html#webdev.core.Constants.ResponsePaid">Constant Field Values</a></dd>
                </dl>
              </li>
            </ul>
            <a name="ResponseError">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>ResponseError</h4>
                <pre>public static final&nbsp;java.lang.String ResponseError</pre>
                <dl>
                  <dt><span class="seeLabel">See Also:</span></dt>
                  <dd><a href="../../constant-values.html#webdev.core.Constants.ResponseError">Constant Field Values</a></dd>
                </dl>
              </li>
            </ul>
            <a name="ResponseInvalidId">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>ResponseInvalidId</h4>
                <pre>public static final&nbsp;java.lang.String ResponseInvalidId</pre>
                <dl>
                  <dt><span class="seeLabel">See Also:</span></dt>
                  <dd><a href="../../constant-values.html#webdev.core.Constants.ResponseInvalidId">Constant Field Values</a></dd>
                </dl>
              </li>
            </ul>
            <a name="UrlInitiateTransaction">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>UrlInitiateTransaction</h4>
                <pre>public static final&nbsp;java.lang.String UrlInitiateTransaction</pre>
                <dl>
                  <dt><span class="seeLabel">See Also:</span></dt>
                  <dd><a href="../../constant-values.html#webdev.core.Constants.UrlInitiateTransaction">Constant Field Values
                    </a></dd>
                </dl>
              </li>
            </ul>
            <a name="UrlInitiateMobileTransaction">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>UrlInitiateMobileTransaction</h4>
                <pre>public static final&nbsp;java.lang.String UrlInitiateMobileTransaction</pre>
                <dl>
                  <dt><span class="seeLabel">See Also:</span></dt>
                  <dd><a href="../../constant-values.html#webdev.core.Constants.UrlInitiateMobileTransaction">Constant Field
                      Values
                    </a></dd>
                </dl>
              </li>
            </ul>
            <a name="MobileMoneyMethodEcocash">
              <!--   -->
            </a>
            <ul class="blockListLast">
              <li class="blockList">
                <h4>MobileMoneyMethodEcocash</h4>
                <pre>public static final&nbsp;java.lang.String MobileMoneyMethodEcocash</pre>
                <dl>
                  <dt><span class="seeLabel">See Also:</span></dt>
                  <dd><a href="../../constant-values.html#webdev.core.Constants.MobileMoneyMethodEcocash">Constant Field
                      Values
                    </a></dd>
                </dl>
              </li>
            </ul>
          </li>
        </ul>
        <!-- ========= CONSTRUCTOR DETAIL ======== -->
        <ul class="blockList">
          <li class="blockList"><a name="constructor.detail">
              <!--   -->
            </a>
            <h3>Constructor Detail</h3>
            <a name="Constants--">
              <!--   -->
            </a>
            <ul class="blockListLast">
              <li class="blockList">
                <h4>Constants</h4>
                <pre>public&nbsp;Constants()</pre>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>

<h2>Class: webdev.core.IResponse</h2>

<div class="contentContainer">
  <div class="description">
    <ul class="blockList">
      <li class="blockList">
        <dl>
          <dt>All Known Implementing Classes:</dt>
          <dd><a href="../../webdev/core/StatusResponse.html" title="class in webdev.core">StatusResponse</a></dd>
        </dl>
        <hr>
        <br>
        <pre>public interface <span class="typeNameLabel">IResponse</span></pre>
        <div class="block">Base interface for all response-type classes</div>
      </li>
    </ul>
  </div>
  <div class="summary">
    <ul class="blockList">
      <li class="blockList">
        <!-- ========== METHOD SUMMARY =========== -->
        <ul class="blockList">
          <li class="blockList"><a name="method.summary">
              <!--   -->
            </a>
            <h3>Method Summary</h3>
            <table class="memberSummary" border="0" cellpadding="3" cellspacing="0" summary="Method Summary table, listing methods, and an explanation">
              <caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span
                  id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span
                  id="t3" class="tableTab"><span><a href="javascript:show(4);">Abstract Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption>
              <tr>
                <th class="colFirst" scope="col">Modifier and Type</th>
                <th class="colLast" scope="col">Method and Description</th>
              </tr>
              <tr id="i0" class="altColor">
                <td class="colFirst"><code>boolean</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/IResponse.html#Success--">Success</a></span>()</code>&nbsp;</td>
              </tr>
            </table>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="details">
    <ul class="blockList">
      <li class="blockList">
        <!-- ============ METHOD DETAIL ========== -->
        <ul class="blockList">
          <li class="blockList"><a name="method.detail">
              <!--   -->
            </a>
            <h3>Method Detail</h3>
            <a name="Success--">
              <!--   -->
            </a>
            <ul class="blockListLast">
              <li class="blockList">
                <h4>Success</h4>
                <pre>boolean&nbsp;Success()</pre>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>

<h2>Class: webdev.core.InitResponse</h2>

<div class="contentContainer">
  <ul class="inheritance">
    <li>java.lang.Object</li>
    <li>
      <ul class="inheritance">
        <li><a href="../../webdev/core/CanFail.html" title="class in webdev.core">webdev.core.CanFail</a></li>
        <li>
          <ul class="inheritance">
            <li>webdev.core.InitResponse</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
  <div class="description">
    <ul class="blockList">
      <li class="blockList">
        <hr>
        <br>
        <pre>public class <span class="typeNameLabel">InitResponse</span>
extends <a href="../../webdev/core/CanFail.html" title="class in webdev.core">CanFail</a></pre>
        <div class="block">This class is a wrapper around the response sent from Paynow when initiating a transaction</div>
      </li>
    </ul>
  </div>
  <div class="summary">
    <ul class="blockList">
      <li class="blockList">
        <!-- =========== FIELD SUMMARY =========== -->
        <ul class="blockList">
          <li class="blockList"><a name="field.summary">
              <!--   -->
            </a>
            <h3>Field Summary</h3>
            <table class="memberSummary" border="0" cellpadding="3" cellspacing="0" summary="Field Summary table, listing fields, and an explanation">
              <caption><span>Fields</span><span class="tabEnd">&nbsp;</span></caption>
              <tr>
                <th class="colFirst" scope="col">Modifier and Type</th>
                <th class="colLast" scope="col">Field and Description</th>
              </tr>
              <tr class="altColor">
                <td class="colFirst"><code>private java.util.Map&lt;java.lang.String,java.lang.String&gt;</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/InitResponse.html#Data">Data</a></span></code>&nbsp;</td>
              </tr>
              <tr class="rowColor">
                <td class="colFirst"><code>private boolean</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/InitResponse.html#HasRedirect">HasRedirect</a></span></code>&nbsp;</td>
              </tr>
              <tr class="altColor">
                <td class="colFirst"><code>private boolean</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/InitResponse.html#WasSuccessful">WasSuccessful</a></span></code>&nbsp;</td>
              </tr>
            </table>
          </li>
        </ul>
        <!-- ======== CONSTRUCTOR SUMMARY ======== -->
        <ul class="blockList">
          <li class="blockList"><a name="constructor.summary">
              <!--   -->
            </a>
            <h3>Constructor Summary</h3>
            <table class="memberSummary" border="0" cellpadding="3" cellspacing="0" summary="Constructor Summary table, listing constructors, and an explanation">
              <caption><span>Constructors</span><span class="tabEnd">&nbsp;</span></caption>
              <tr>
                <th class="colOne" scope="col">Constructor and Description</th>
              </tr>
              <tr class="altColor">
                <td class="colOne"><code><span class="memberNameLink"><a href="../../webdev/core/InitResponse.html#InitResponse-java.util.Map-">InitResponse</a></span>(java.util.Map&lt;java.lang.String,java.lang.String&gt;&nbsp;response)</code>
                  <div class="block">InitResponse constructor.</div>
                </td>
              </tr>
            </table>
          </li>
        </ul>
        <!-- ========== METHOD SUMMARY =========== -->
        <ul class="blockList">
          <li class="blockList"><a name="method.summary">
              <!--   -->
            </a>
            <h3>Method Summary</h3>
            <table class="memberSummary" border="0" cellpadding="3" cellspacing="0" summary="Method Summary table, listing methods, and an explanation">
              <caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span
                  id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span
                  id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption>
              <tr>
                <th class="colFirst" scope="col">Modifier and Type</th>
                <th class="colLast" scope="col">Method and Description</th>
              </tr>
              <tr id="i0" class="altColor">
                <td class="colFirst"><code>protected java.util.Map&lt;java.lang.String,java.lang.String&gt;</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/InitResponse.html#getData--">getData</a></span>()</code>&nbsp;</td>
              </tr>
              <tr id="i1" class="rowColor">
                <td class="colFirst"><code>java.util.Map&lt;java.lang.String,java.lang.String&gt;</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/InitResponse.html#GetData--">GetData</a></span>()</code>
                  <div class="block">Get the original data sent from Paynow</div>
                </td>
              </tr>
              <tr id="i2" class="altColor">
                <td class="colFirst"><code>protected boolean</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/InitResponse.html#getHasRedirect--">getHasRedirect</a></span>()</code>&nbsp;</td>
              </tr>
              <tr id="i3" class="rowColor">
                <td class="colFirst"><code>protected boolean</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/InitResponse.html#getWasSuccessful--">getWasSuccessful</a></span>()</code>&nbsp;</td>
              </tr>
              <tr id="i4" class="altColor">
                <td class="colFirst"><code>private void</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/InitResponse.html#Load--">Load</a></span>()</code>
                  <div class="block">Reads through the response data sent from Paynow</div>
                </td>
              </tr>
              <tr id="i5" class="rowColor">
                <td class="colFirst"><code>java.lang.String</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/InitResponse.html#PollUrl--">PollUrl</a></span>()</code>
                  <div class="block">Returns the poll URL sent from Paynow</div>
                </td>
              </tr>
              <tr id="i6" class="altColor">
                <td class="colFirst"><code>java.lang.String</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/InitResponse.html#RedirectLink--">RedirectLink</a></span>()</code>
                  <div class="block">Returns the url the user should be taken to so they can make a payment</div>
                </td>
              </tr>
              <tr id="i7" class="rowColor">
                <td class="colFirst"><code>protected void</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/InitResponse.html#setHasRedirect-boolean-">setHasRedirect</a></span>(boolean&nbsp;value)</code>&nbsp;</td>
              </tr>
              <tr id="i8" class="altColor">
                <td class="colFirst"><code>protected void</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/InitResponse.html#setWasSuccessful-boolean-">setWasSuccessful</a></span>(boolean&nbsp;value)</code>&nbsp;</td>
              </tr>
              <tr id="i9" class="rowColor">
                <td class="colFirst"><code>boolean</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/InitResponse.html#Success--">Success</a></span>()</code>
                  <div class="block">Gets a boolean indicating whether a request succeeded or failed</div>
                </td>
              </tr>
            </table>
            <ul class="blockList">
              <li class="blockList"><a name="methods.inherited.from.class.webdev.core.CanFail">
                  <!--   -->
                </a>
                <h3>Methods inherited from class&nbsp;webdev.core.<a href="../../webdev/core/CanFail.html" title="class in webdev.core">CanFail</a></h3>
                <code><a href="../../webdev/core/CanFail.html#Errors--">Errors</a>, <a href="../../webdev/core/CanFail.html#Errors-char-">Errors</a>, <a href="../../webdev/core/CanFail.html#Fail-java.lang.String-">Fail</a></code></li>
            </ul>
            <ul class="blockList">
              <li class="blockList"><a name="methods.inherited.from.class.java.lang.Object">
                  <!--   -->
                </a>
                <h3>Methods inherited from class&nbsp;java.lang.Object</h3>
                <code>clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait</code></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="details">
    <ul class="blockList">
      <li class="blockList">
        <!-- ============ FIELD DETAIL =========== -->
        <ul class="blockList">
          <li class="blockList"><a name="field.detail">
              <!--   -->
            </a>
            <h3>Field Detail</h3>
            <a name="Data">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>Data</h4>
                <pre>private&nbsp;java.util.Map&lt;java.lang.String,java.lang.String&gt; Data</pre>
              </li>
            </ul>
            <a name="WasSuccessful">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>WasSuccessful</h4>
                <pre>private&nbsp;boolean WasSuccessful</pre>
              </li>
            </ul>
            <a name="HasRedirect">
              <!--   -->
            </a>
            <ul class="blockListLast">
              <li class="blockList">
                <h4>HasRedirect</h4>
                <pre>private&nbsp;boolean HasRedirect</pre>
              </li>
            </ul>
          </li>
        </ul>
        <!-- ========= CONSTRUCTOR DETAIL ======== -->
        <ul class="blockList">
          <li class="blockList"><a name="constructor.detail">
              <!--   -->
            </a>
            <h3>Constructor Detail</h3>
            <a name="InitResponse-java.util.Map-">
              <!--   -->
            </a>
            <ul class="blockListLast">
              <li class="blockList">
                <h4>InitResponse</h4>
                <pre>public&nbsp;InitResponse(java.util.Map&lt;java.lang.String,java.lang.String&gt;&nbsp;response)</pre>
                <div class="block">InitResponse constructor.</div>
                <dl>
                  <dt><span class="paramLabel">Parameters:</span></dt>
                  <dd><code>response</code> - Response data sent from Paynow</dd>
                  <dt><span class="throwsLabel">Throws:</span></dt>
                  <dd><code><a href="../../webdev/exceptions/InvalidIntegrationException.html" title="class in webdev.exceptions">InvalidIntegrationException</a></code>                    -
                    If the error returned from paynow is</dd>
                </dl>
              </li>
            </ul>
          </li>
        </ul>
        <!-- ============ METHOD DETAIL ========== -->
        <ul class="blockList">
          <li class="blockList"><a name="method.detail">
              <!--   -->
            </a>
            <h3>Method Detail</h3>
            <a name="getData--">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>getData</h4>
                <pre>protected final&nbsp;java.util.Map&lt;java.lang.String,java.lang.String&gt;&nbsp;getData()</pre>
              </li>
            </ul>
            <a name="getWasSuccessful--">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>getWasSuccessful</h4>
                <pre>protected final&nbsp;boolean&nbsp;getWasSuccessful()</pre>
              </li>
            </ul>
            <a name="setWasSuccessful-boolean-">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>setWasSuccessful</h4>
                <pre>protected final&nbsp;void&nbsp;setWasSuccessful(boolean&nbsp;value)</pre>
              </li>
            </ul>
            <a name="getHasRedirect--">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>getHasRedirect</h4>
                <pre>protected final&nbsp;boolean&nbsp;getHasRedirect()</pre>
              </li>
            </ul>
            <a name="setHasRedirect-boolean-">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>setHasRedirect</h4>
                <pre>protected final&nbsp;void&nbsp;setHasRedirect(boolean&nbsp;value)</pre>
              </li>
            </ul>
            <a name="Load--">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>Load</h4>
                <pre>private&nbsp;void&nbsp;Load()</pre>
                <div class="block">Reads through the response data sent from Paynow</div>
              </li>
            </ul>
            <a name="PollUrl--">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>PollUrl</h4>
                <pre>public final&nbsp;java.lang.String&nbsp;PollUrl()</pre>
                <div class="block">Returns the poll URL sent from Paynow</div>
                <dl>
                  <dt><span class="returnLabel">Returns:</span></dt>
                </dl>
              </li>
            </ul>
            <a name="Success--">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>Success</h4>
                <pre>public final&nbsp;boolean&nbsp;Success()</pre>
                <div class="block">Gets a boolean indicating whether a request succeeded or failed</div>
                <dl>
                  <dt><span class="returnLabel">Returns:</span></dt>
                </dl>
              </li>
            </ul>
            <a name="RedirectLink--">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>RedirectLink</h4>
                <pre>public final&nbsp;java.lang.String&nbsp;RedirectLink()</pre>
                <div class="block">Returns the url the user should be taken to so they can make a payment</div>
                <dl>
                  <dt><span class="returnLabel">Returns:</span></dt>
                </dl>
              </li>
            </ul>
            <a name="GetData--">
              <!--   -->
            </a>
            <ul class="blockListLast">
              <li class="blockList">
                <h4>GetData</h4>
                <pre>public final&nbsp;java.util.Map&lt;java.lang.String,java.lang.String&gt;&nbsp;GetData()</pre>
                <div class="block">Get the original data sent from Paynow</div>
                <dl>
                  <dt><span class="returnLabel">Returns:</span></dt>
                </dl>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>

<h2>Class: webdev.core.StatusResponse</h2>

<div class="contentContainer">
  <ul class="inheritance">
    <li>java.lang.Object</li>
    <li>
      <ul class="inheritance">
        <li><a href="../../webdev/core/CanFail.html" title="class in webdev.core">webdev.core.CanFail</a></li>
        <li>
          <ul class="inheritance">
            <li>webdev.core.StatusResponse</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
  <div class="description">
    <ul class="blockList">
      <li class="blockList">
        <dl>
          <dt>All Implemented Interfaces:</dt>
          <dd><a href="../../webdev/core/IResponse.html" title="interface in webdev.core">IResponse</a></dd>
        </dl>
        <hr>
        <br>
        <pre>public class <span class="typeNameLabel">StatusResponse</span>
extends <a href="../../webdev/core/CanFail.html" title="class in webdev.core">CanFail</a>
implements <a href="../../webdev/core/IResponse.html" title="interface in webdev.core">IResponse</a></pre>
        <div class="block">This class is a wrapper around the status updates sent from Paynow</div>
      </li>
    </ul>
  </div>
  <div class="summary">
    <ul class="blockList">
      <li class="blockList">
        <!-- =========== FIELD SUMMARY =========== -->
        <ul class="blockList">
          <li class="blockList"><a name="field.summary">
              <!--   -->
            </a>
            <h3>Field Summary</h3>
            <table class="memberSummary" border="0" cellpadding="3" cellspacing="0" summary="Field Summary table, listing fields, and an explanation">
              <caption><span>Fields</span><span class="tabEnd">&nbsp;</span></caption>
              <tr>
                <th class="colFirst" scope="col">Modifier and Type</th>
                <th class="colLast" scope="col">Field and Description</th>
              </tr>
              <tr class="altColor">
                <td class="colFirst"><code>private java.math.BigDecimal</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/StatusResponse.html#Amount">Amount</a></span></code>
                  <div class="block">The total amount of the transaction</div>
                </td>
              </tr>
              <tr class="rowColor">
                <td class="colFirst"><code>private java.util.Map&lt;java.lang.String,java.lang.String&gt;</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/StatusResponse.html#Data">Data</a></span></code>
                  <div class="block">The data returned from Paynow</div>
                </td>
              </tr>
              <tr class="altColor">
                <td class="colFirst"><code>private java.lang.String</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/StatusResponse.html#Reference">Reference</a></span></code>
                  <div class="block">The unique reference of the transaction</div>
                </td>
              </tr>
              <tr class="rowColor">
                <td class="colFirst"><code>private boolean</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/StatusResponse.html#WasPaid">WasPaid</a></span></code>
                  <div class="block">Boolean value indicatiing whether a transaction was paid or not</div>
                </td>
              </tr>
              <tr class="altColor">
                <td class="colFirst"><code>private boolean</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/StatusResponse.html#WasSuccessful">WasSuccessful</a></span></code>
                  <div class="block">Boolean indicating whether a transaction was successful or not</div>
                </td>
              </tr>
            </table>
          </li>
        </ul>
        <!-- ======== CONSTRUCTOR SUMMARY ======== -->
        <ul class="blockList">
          <li class="blockList"><a name="constructor.summary">
              <!--   -->
            </a>
            <h3>Constructor Summary</h3>
            <table class="memberSummary" border="0" cellpadding="3" cellspacing="0" summary="Constructor Summary table, listing constructors, and an explanation">
              <caption><span>Constructors</span><span class="tabEnd">&nbsp;</span></caption>
              <tr>
                <th class="colOne" scope="col">Constructor and Description</th>
              </tr>
              <tr class="altColor">
                <td class="colOne"><code><span class="memberNameLink"><a href="../../webdev/core/StatusResponse.html#StatusResponse-java.util.Map-">StatusResponse</a></span>(java.util.Map&lt;java.lang.String,java.lang.String&gt;&nbsp;response)</code>
                  <div class="block">InitResponse constructor.</div>
                </td>
              </tr>
            </table>
          </li>
        </ul>
        <!-- ========== METHOD SUMMARY =========== -->
        <ul class="blockList">
          <li class="blockList"><a name="method.summary">
              <!--   -->
            </a>
            <h3>Method Summary</h3>
            <table class="memberSummary" border="0" cellpadding="3" cellspacing="0" summary="Method Summary table, listing methods, and an explanation">
              <caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span
                  id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span
                  id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption>
              <tr>
                <th class="colFirst" scope="col">Modifier and Type</th>
                <th class="colLast" scope="col">Method and Description</th>
              </tr>
              <tr id="i0" class="altColor">
                <td class="colFirst"><code>java.math.BigDecimal</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/StatusResponse.html#getAmount--">getAmount</a></span>()</code>&nbsp;</td>
              </tr>
              <tr id="i1" class="rowColor">
                <td class="colFirst"><code>protected java.util.Map&lt;java.lang.String,java.lang.String&gt;</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/StatusResponse.html#getData--">getData</a></span>()</code>&nbsp;</td>
              </tr>
              <tr id="i2" class="altColor">
                <td class="colFirst"><code>java.util.Map&lt;java.lang.String,java.lang.String&gt;</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/StatusResponse.html#GetData--">GetData</a></span>()</code>
                  <div class="block">Get the original data sent from Paynow</div>
                </td>
              </tr>
              <tr id="i3" class="rowColor">
                <td class="colFirst"><code>java.lang.String</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/StatusResponse.html#getReference--">getReference</a></span>()</code>&nbsp;</td>
              </tr>
              <tr id="i4" class="altColor">
                <td class="colFirst"><code>boolean</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/StatusResponse.html#getWasPaid--">getWasPaid</a></span>()</code>&nbsp;</td>
              </tr>
              <tr id="i5" class="rowColor">
                <td class="colFirst"><code>protected boolean</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/StatusResponse.html#getWasSuccessful--">getWasSuccessful</a></span>()</code>&nbsp;</td>
              </tr>
              <tr id="i6" class="altColor">
                <td class="colFirst"><code>private void</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/StatusResponse.html#Load--">Load</a></span>()</code>
                  <div class="block">Reads through the response data sent from Paynow</div>
                </td>
              </tr>
              <tr id="i7" class="rowColor">
                <td class="colFirst"><code>boolean</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/StatusResponse.html#Paid--">Paid</a></span>()</code>&nbsp;</td>
              </tr>
              <tr id="i8" class="altColor">
                <td class="colFirst"><code>java.lang.String</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/StatusResponse.html#PollUrl--">PollUrl</a></span>()</code>
                  <div class="block">Returns the poll URL sent from Paynow</div>
                </td>
              </tr>
              <tr id="i9" class="rowColor">
                <td class="colFirst"><code>void</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/StatusResponse.html#setAmount-java.math.BigDecimal-">setAmount</a></span>(java.math.BigDecimal&nbsp;value)</code>&nbsp;</td>
              </tr>
              <tr id="i10" class="altColor">
                <td class="colFirst"><code>void</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/StatusResponse.html#setReference-java.lang.String-">setReference</a></span>(java.lang.String&nbsp;value)</code>&nbsp;</td>
              </tr>
              <tr id="i11" class="rowColor">
                <td class="colFirst"><code>void</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/StatusResponse.html#setWasPaid-boolean-">setWasPaid</a></span>(boolean&nbsp;value)</code>&nbsp;</td>
              </tr>
              <tr id="i12" class="altColor">
                <td class="colFirst"><code>protected void</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/StatusResponse.html#setWasSuccessful-boolean-">setWasSuccessful</a></span>(boolean&nbsp;value)</code>&nbsp;</td>
              </tr>
              <tr id="i13" class="rowColor">
                <td class="colFirst"><code>boolean</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/core/StatusResponse.html#Success--">Success</a></span>()</code>
                  <div class="block">Gets a boolean indicating whether a request succeeded or failed</div>
                </td>
              </tr>
            </table>
            <ul class="blockList">
              <li class="blockList"><a name="methods.inherited.from.class.webdev.core.CanFail">
                  <!--   -->
                </a>
                <h3>Methods inherited from class&nbsp;webdev.core.<a href="../../webdev/core/CanFail.html" title="class in webdev.core">CanFail</a></h3>
                <code><a href="../../webdev/core/CanFail.html#Errors--">Errors</a>, <a href="../../webdev/core/CanFail.html#Errors-char-">Errors</a>, <a href="../../webdev/core/CanFail.html#Fail-java.lang.String-">Fail</a></code></li>
            </ul>
            <ul class="blockList">
              <li class="blockList"><a name="methods.inherited.from.class.java.lang.Object">
                  <!--   -->
                </a>
                <h3>Methods inherited from class&nbsp;java.lang.Object</h3>
                <code>clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait</code></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="details">
    <ul class="blockList">
      <li class="blockList">
        <!-- ============ FIELD DETAIL =========== -->
        <ul class="blockList">
          <li class="blockList"><a name="field.detail">
              <!--   -->
            </a>
            <h3>Field Detail</h3>
            <a name="Data">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>Data</h4>
                <pre>private&nbsp;java.util.Map&lt;java.lang.String,java.lang.String&gt; Data</pre>
                <div class="block">The data returned from Paynow</div>
              </li>
            </ul>
            <a name="WasSuccessful">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>WasSuccessful</h4>
                <pre>private&nbsp;boolean WasSuccessful</pre>
                <div class="block">Boolean indicating whether a transaction was successful or not</div>
              </li>
            </ul>
            <a name="Reference">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>Reference</h4>
                <pre>private&nbsp;java.lang.String Reference</pre>
                <div class="block">The unique reference of the transaction</div>
              </li>
            </ul>
            <a name="Amount">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>Amount</h4>
                <pre>private&nbsp;java.math.BigDecimal Amount</pre>
                <div class="block">The total amount of the transaction</div>
              </li>
            </ul>
            <a name="WasPaid">
              <!--   -->
            </a>
            <ul class="blockListLast">
              <li class="blockList">
                <h4>WasPaid</h4>
                <pre>private&nbsp;boolean WasPaid</pre>
                <div class="block">Boolean value indicatiing whether a transaction was paid or not</div>
              </li>
            </ul>
          </li>
        </ul>
        <!-- ========= CONSTRUCTOR DETAIL ======== -->
        <ul class="blockList">
          <li class="blockList"><a name="constructor.detail">
              <!--   -->
            </a>
            <h3>Constructor Detail</h3>
            <a name="StatusResponse-java.util.Map-">
              <!--   -->
            </a>
            <ul class="blockListLast">
              <li class="blockList">
                <h4>StatusResponse</h4>
                <pre>public&nbsp;StatusResponse(java.util.Map&lt;java.lang.String,java.lang.String&gt;&nbsp;response)</pre>
                <div class="block">InitResponse constructor.</div>
                <dl>
                  <dt><span class="paramLabel">Parameters:</span></dt>
                  <dd><code>response</code> - Response data sent from Paynow</dd>
                  <dt><span class="throwsLabel">Throws:</span></dt>
                  <dd><code><a href="../../webdev/exceptions/InvalidIntegrationException.html" title="class in webdev.exceptions">InvalidIntegrationException</a></code>                    -
                    If the error returned from paynow is</dd>
                </dl>
              </li>
            </ul>
          </li>
        </ul>
        <!-- ============ METHOD DETAIL ========== -->
        <ul class="blockList">
          <li class="blockList"><a name="method.detail">
              <!--   -->
            </a>
            <h3>Method Detail</h3>
            <a name="getData--">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>getData</h4>
                <pre>protected final&nbsp;java.util.Map&lt;java.lang.String,java.lang.String&gt;&nbsp;getData()</pre>
              </li>
            </ul>
            <a name="getWasSuccessful--">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>getWasSuccessful</h4>
                <pre>protected final&nbsp;boolean&nbsp;getWasSuccessful()</pre>
              </li>
            </ul>
            <a name="setWasSuccessful-boolean-">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>setWasSuccessful</h4>
                <pre>protected final&nbsp;void&nbsp;setWasSuccessful(boolean&nbsp;value)</pre>
              </li>
            </ul>
            <a name="getReference--">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>getReference</h4>
                <pre>public final&nbsp;java.lang.String&nbsp;getReference()</pre>
              </li>
            </ul>
            <a name="setReference-java.lang.String-">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>setReference</h4>
                <pre>public final&nbsp;void&nbsp;setReference(java.lang.String&nbsp;value)</pre>
              </li>
            </ul>
            <a name="getAmount--">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>getAmount</h4>
                <pre>public final&nbsp;java.math.BigDecimal&nbsp;getAmount()</pre>
              </li>
            </ul>
            <a name="setAmount-java.math.BigDecimal-">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>setAmount</h4>
                <pre>public final&nbsp;void&nbsp;setAmount(java.math.BigDecimal&nbsp;value)</pre>
              </li>
            </ul>
            <a name="getWasPaid--">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>getWasPaid</h4>
                <pre>public final&nbsp;boolean&nbsp;getWasPaid()</pre>
              </li>
            </ul>
            <a name="setWasPaid-boolean-">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>setWasPaid</h4>
                <pre>public final&nbsp;void&nbsp;setWasPaid(boolean&nbsp;value)</pre>
              </li>
            </ul>
            <a name="Success--">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>Success</h4>
                <pre>public final&nbsp;boolean&nbsp;Success()</pre>
                <div class="block">Gets a boolean indicating whether a request succeeded or failed</div>
                <dl>
                  <dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
                  <dd><code><a href="../../webdev/core/IResponse.html#Success--">Success</a></code>&nbsp;in interface&nbsp;<code><a href="../../webdev/core/IResponse.html" title="interface in webdev.core">IResponse</a></code></dd>
                  <dt><span class="returnLabel">Returns:</span></dt>
                  <dd>Boolean value indicating whether a request succeeded</dd>
                </dl>
              </li>
            </ul>
            <a name="Load--">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>Load</h4>
                <pre>private&nbsp;void&nbsp;Load()</pre>
                <div class="block">Reads through the response data sent from Paynow</div>
              </li>
            </ul>
            <a name="PollUrl--">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>PollUrl</h4>
                <pre>public final&nbsp;java.lang.String&nbsp;PollUrl()</pre>
                <div class="block">Returns the poll URL sent from Paynow</div>
                <dl>
                  <dt><span class="returnLabel">Returns:</span></dt>
                  <dd>The poll URL sent from Paynow</dd>
                </dl>
              </li>
            </ul>
            <a name="Paid--">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>Paid</h4>
                <pre>public final&nbsp;boolean&nbsp;Paid()</pre>
              </li>
            </ul>
            <a name="GetData--">
              <!--   -->
            </a>
            <ul class="blockListLast">
              <li class="blockList">
                <h4>GetData</h4>
                <pre>public final&nbsp;java.util.Map&lt;java.lang.String,java.lang.String&gt;&nbsp;GetData()</pre>
                <div class="block">Get the original data sent from Paynow</div>
                <dl>
                  <dt><span class="returnLabel">Returns:</span></dt>
                  <dd>The original data sent from Paynow</dd>
                </dl>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>

<h2>Class: webdev.exceptions.EmptyCartException</h2>

<div class="contentContainer">
  <ul class="inheritance">
    <li>java.lang.Object</li>
    <li>
      <ul class="inheritance">
        <li>java.lang.Throwable</li>
        <li>
          <ul class="inheritance">
            <li>java.lang.Exception</li>
            <li>
              <ul class="inheritance">
                <li>java.lang.RuntimeException</li>
                <li>
                  <ul class="inheritance">
                    <li>webdev.exceptions.EmptyCartException</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
  <div class="description">
    <ul class="blockList">
      <li class="blockList">
        <dl>
          <dt>All Implemented Interfaces:</dt>
          <dd>java.io.Serializable</dd>
        </dl>
        <hr>
        <br>
        <pre>public class <span class="typeNameLabel">EmptyCartException</span>
extends java.lang.RuntimeException</pre>
        <div class="block">Exception is thrown when user attempts sending an empty transaction to Paynow</div>
        <dl>
          <dt><span class="seeLabel">See Also:</span></dt>
          <dd><a href="../../serialized-form.html#webdev.exceptions.EmptyCartException">Serialized Form</a></dd>
        </dl>
      </li>
    </ul>
  </div>
  <div class="summary">
    <ul class="blockList">
      <li class="blockList">
        <!-- ======== CONSTRUCTOR SUMMARY ======== -->
        <ul class="blockList">
          <li class="blockList"><a name="constructor.summary">
              <!--   -->
            </a>
            <h3>Constructor Summary</h3>
            <table class="memberSummary" border="0" cellpadding="3" cellspacing="0" summary="Constructor Summary table, listing constructors, and an explanation">
              <caption><span>Constructors</span><span class="tabEnd">&nbsp;</span></caption>
              <tr>
                <th class="colOne" scope="col">Constructor and Description</th>
              </tr>
              <tr class="altColor">
                <td class="colOne"><code><span class="memberNameLink"><a href="../../webdev/exceptions/EmptyCartException.html#EmptyCartException--">EmptyCartException</a></span>()</code>&nbsp;</td>
              </tr>
            </table>
          </li>
        </ul>
        <!-- ========== METHOD SUMMARY =========== -->
        <ul class="blockList">
          <li class="blockList"><a name="method.summary">
              <!--   -->
            </a>
            <h3>Method Summary</h3>
            <ul class="blockList">
              <li class="blockList"><a name="methods.inherited.from.class.java.lang.Throwable">
                  <!--   -->
                </a>
                <h3>Methods inherited from class&nbsp;java.lang.Throwable</h3>
                <code>addSuppressed, fillInStackTrace, getCause, getLocalizedMessage, getMessage, getStackTrace, getSuppressed, initCause, printStackTrace, printStackTrace, printStackTrace, setStackTrace, toString</code></li>
            </ul>
            <ul class="blockList">
              <li class="blockList"><a name="methods.inherited.from.class.java.lang.Object">
                  <!--   -->
                </a>
                <h3>Methods inherited from class&nbsp;java.lang.Object</h3>
                <code>clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait</code></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="details">
    <ul class="blockList">
      <li class="blockList">
        <!-- ========= CONSTRUCTOR DETAIL ======== -->
        <ul class="blockList">
          <li class="blockList"><a name="constructor.detail">
              <!--   -->
            </a>
            <h3>Constructor Detail</h3>
            <a name="EmptyCartException--">
              <!--   -->
            </a>
            <ul class="blockListLast">
              <li class="blockList">
                <h4>EmptyCartException</h4>
                <pre>public&nbsp;EmptyCartException()</pre>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>

<h2>Class: webdev.exceptions.HashMismatchException</h2>

<div class="contentContainer">
  <ul class="inheritance">
    <li>java.lang.Object</li>
    <li>
      <ul class="inheritance">
        <li>java.lang.Throwable</li>
        <li>
          <ul class="inheritance">
            <li>java.lang.Exception</li>
            <li>
              <ul class="inheritance">
                <li>java.lang.RuntimeException</li>
                <li>
                  <ul class="inheritance">
                    <li>webdev.exceptions.HashMismatchException</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
  <div class="description">
    <ul class="blockList">
      <li class="blockList">
        <dl>
          <dt>All Implemented Interfaces:</dt>
          <dd>java.io.Serializable</dd>
        </dl>
        <hr>
        <br>
        <pre>public class <span class="typeNameLabel">HashMismatchException</span>
extends java.lang.RuntimeException</pre>
        <div class="block">Exception is thrown when the hash sent by Paynow is not equal to the hash generated locally</div>
        <dl>
          <dt><span class="seeLabel">See Also:</span></dt>
          <dd><a href="../../serialized-form.html#webdev.exceptions.HashMismatchException">Serialized Form</a></dd>
        </dl>
      </li>
    </ul>
  </div>
  <div class="summary">
    <ul class="blockList">
      <li class="blockList">
        <!-- ======== CONSTRUCTOR SUMMARY ======== -->
        <ul class="blockList">
          <li class="blockList"><a name="constructor.summary">
              <!--   -->
            </a>
            <h3>Constructor Summary</h3>
            <table class="memberSummary" border="0" cellpadding="3" cellspacing="0" summary="Constructor Summary table, listing constructors, and an explanation">
              <caption><span>Constructors</span><span class="tabEnd">&nbsp;</span></caption>
              <tr>
                <th class="colOne" scope="col">Constructor and Description</th>
              </tr>
              <tr class="altColor">
                <td class="colOne"><code><span class="memberNameLink"><a href="../../webdev/exceptions/HashMismatchException.html#HashMismatchException--">HashMismatchException</a></span>()</code>&nbsp;</td>
              </tr>
            </table>
          </li>
        </ul>
        <!-- ========== METHOD SUMMARY =========== -->
        <ul class="blockList">
          <li class="blockList"><a name="method.summary">
              <!--   -->
            </a>
            <h3>Method Summary</h3>
            <ul class="blockList">
              <li class="blockList"><a name="methods.inherited.from.class.java.lang.Throwable">
                  <!--   -->
                </a>
                <h3>Methods inherited from class&nbsp;java.lang.Throwable</h3>
                <code>addSuppressed, fillInStackTrace, getCause, getLocalizedMessage, getMessage, getStackTrace, getSuppressed, initCause, printStackTrace, printStackTrace, printStackTrace, setStackTrace, toString</code></li>
            </ul>
            <ul class="blockList">
              <li class="blockList"><a name="methods.inherited.from.class.java.lang.Object">
                  <!--   -->
                </a>
                <h3>Methods inherited from class&nbsp;java.lang.Object</h3>
                <code>clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait</code></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="details">
    <ul class="blockList">
      <li class="blockList">
        <!-- ========= CONSTRUCTOR DETAIL ======== -->
        <ul class="blockList">
          <li class="blockList"><a name="constructor.detail">
              <!--   -->
            </a>
            <h3>Constructor Detail</h3>
            <a name="HashMismatchException--">
              <!--   -->
            </a>
            <ul class="blockListLast">
              <li class="blockList">
                <h4>HashMismatchException</h4>
                <pre>public&nbsp;HashMismatchException()</pre>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>

<h2>Class: webdev.exceptions.InvalidIntegrationException</h2>

<div class="contentContainer">
  <ul class="inheritance">
    <li>java.lang.Object</li>
    <li>
      <ul class="inheritance">
        <li>java.lang.Throwable</li>
        <li>
          <ul class="inheritance">
            <li>java.lang.Exception</li>
            <li>
              <ul class="inheritance">
                <li>java.lang.RuntimeException</li>
                <li>
                  <ul class="inheritance">
                    <li>webdev.exceptions.InvalidIntegrationException</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
  <div class="description">
    <ul class="blockList">
      <li class="blockList">
        <dl>
          <dt>All Implemented Interfaces:</dt>
          <dd>java.io.Serializable</dd>
        </dl>
        <hr>
        <br>
        <pre>public class <span class="typeNameLabel">InvalidIntegrationException</span>
extends java.lang.RuntimeException</pre>
        <div class="block">Exception is thrown when user attempts using invalid integration details</div>
        <dl>
          <dt><span class="seeLabel">See Also:</span></dt>
          <dd><a href="../../serialized-form.html#webdev.exceptions.InvalidIntegrationException">Serialized Form</a></dd>
        </dl>
      </li>
    </ul>
  </div>
  <div class="summary">
    <ul class="blockList">
      <li class="blockList">
        <!-- ======== CONSTRUCTOR SUMMARY ======== -->
        <ul class="blockList">
          <li class="blockList"><a name="constructor.summary">
              <!--   -->
            </a>
            <h3>Constructor Summary</h3>
            <table class="memberSummary" border="0" cellpadding="3" cellspacing="0" summary="Constructor Summary table, listing constructors, and an explanation">
              <caption><span>Constructors</span><span class="tabEnd">&nbsp;</span></caption>
              <tr>
                <th class="colOne" scope="col">Constructor and Description</th>
              </tr>
              <tr class="altColor">
                <td class="colOne"><code><span class="memberNameLink"><a href="../../webdev/exceptions/InvalidIntegrationException.html#InvalidIntegrationException--">InvalidIntegrationException</a></span>()</code>&nbsp;</td>
              </tr>
            </table>
          </li>
        </ul>
        <!-- ========== METHOD SUMMARY =========== -->
        <ul class="blockList">
          <li class="blockList"><a name="method.summary">
              <!--   -->
            </a>
            <h3>Method Summary</h3>
            <ul class="blockList">
              <li class="blockList"><a name="methods.inherited.from.class.java.lang.Throwable">
                  <!--   -->
                </a>
                <h3>Methods inherited from class&nbsp;java.lang.Throwable</h3>
                <code>addSuppressed, fillInStackTrace, getCause, getLocalizedMessage, getMessage, getStackTrace, getSuppressed, initCause, printStackTrace, printStackTrace, printStackTrace, setStackTrace, toString</code></li>
            </ul>
            <ul class="blockList">
              <li class="blockList"><a name="methods.inherited.from.class.java.lang.Object">
                  <!--   -->
                </a>
                <h3>Methods inherited from class&nbsp;java.lang.Object</h3>
                <code>clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait</code></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="details">
    <ul class="blockList">
      <li class="blockList">
        <!-- ========= CONSTRUCTOR DETAIL ======== -->
        <ul class="blockList">
          <li class="blockList"><a name="constructor.detail">
              <!--   -->
            </a>
            <h3>Constructor Detail</h3>
            <a name="InvalidIntegrationException--">
              <!--   -->
            </a>
            <ul class="blockListLast">
              <li class="blockList">
                <h4>InvalidIntegrationException</h4>
                <pre>public&nbsp;InvalidIntegrationException()</pre>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>

<h2>Class: webdev.exceptions.InvalidReferenceException</h2>

<div class="contentContainer">
  <ul class="inheritance">
    <li>java.lang.Object</li>
    <li>
      <ul class="inheritance">
        <li>java.lang.Throwable</li>
        <li>
          <ul class="inheritance">
            <li>java.lang.Exception</li>
            <li>
              <ul class="inheritance">
                <li>java.lang.RuntimeException</li>
                <li>
                  <ul class="inheritance">
                    <li>webdev.exceptions.InvalidReferenceException</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
  <div class="description">
    <ul class="blockList">
      <li class="blockList">
        <dl>
          <dt>All Implemented Interfaces:</dt>
          <dd>java.io.Serializable</dd>
        </dl>
        <hr>
        <br>
        <pre>public class <span class="typeNameLabel">InvalidReferenceException</span>
extends java.lang.RuntimeException</pre>
        <div class="block">Exception is thrown when user attempts sending an empty transaction reference to Paynow</div>
        <dl>
          <dt><span class="seeLabel">See Also:</span></dt>
          <dd><a href="../../serialized-form.html#webdev.exceptions.InvalidReferenceException">Serialized Form</a></dd>
        </dl>
      </li>
    </ul>
  </div>
  <div class="summary">
    <ul class="blockList">
      <li class="blockList">
        <!-- ======== CONSTRUCTOR SUMMARY ======== -->
        <ul class="blockList">
          <li class="blockList"><a name="constructor.summary">
              <!--   -->
            </a>
            <h3>Constructor Summary</h3>
            <table class="memberSummary" border="0" cellpadding="3" cellspacing="0" summary="Constructor Summary table, listing constructors, and an explanation">
              <caption><span>Constructors</span><span class="tabEnd">&nbsp;</span></caption>
              <tr>
                <th class="colOne" scope="col">Constructor and Description</th>
              </tr>
              <tr class="altColor">
                <td class="colOne"><code><span class="memberNameLink"><a href="../../webdev/exceptions/InvalidReferenceException.html#InvalidReferenceException--">InvalidReferenceException</a></span>()</code>&nbsp;</td>
              </tr>
            </table>
          </li>
        </ul>
        <!-- ========== METHOD SUMMARY =========== -->
        <ul class="blockList">
          <li class="blockList"><a name="method.summary">
              <!--   -->
            </a>
            <h3>Method Summary</h3>
            <ul class="blockList">
              <li class="blockList"><a name="methods.inherited.from.class.java.lang.Throwable">
                  <!--   -->
                </a>
                <h3>Methods inherited from class&nbsp;java.lang.Throwable</h3>
                <code>addSuppressed, fillInStackTrace, getCause, getLocalizedMessage, getMessage, getStackTrace, getSuppressed, initCause, printStackTrace, printStackTrace, printStackTrace, setStackTrace, toString</code></li>
            </ul>
            <ul class="blockList">
              <li class="blockList"><a name="methods.inherited.from.class.java.lang.Object">
                  <!--   -->
                </a>
                <h3>Methods inherited from class&nbsp;java.lang.Object</h3>
                <code>clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait</code></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="details">
    <ul class="blockList">
      <li class="blockList">
        <!-- ========= CONSTRUCTOR DETAIL ======== -->
        <ul class="blockList">
          <li class="blockList"><a name="constructor.detail">
              <!--   -->
            </a>
            <h3>Constructor Detail</h3>
            <a name="InvalidReferenceException--">
              <!--   -->
            </a>
            <ul class="blockListLast">
              <li class="blockList">
                <h4>InvalidReferenceException</h4>
                <pre>public&nbsp;InvalidReferenceException()</pre>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>

<h2>Class: webdev.helpers.Extensions</h2>

<div class="contentContainer">
  <ul class="inheritance">
    <li>java.lang.Object</li>
    <li>
      <ul class="inheritance">
        <li>webdev.helpers.Extensions</li>
      </ul>
    </li>
  </ul>
  <div class="description">
    <ul class="blockList">
      <li class="blockList">
        <hr>
        <br>
        <pre>public final class <span class="typeNameLabel">Extensions</span>
extends java.lang.Object</pre>
      </li>
    </ul>
  </div>
  <div class="summary">
    <ul class="blockList">
      <li class="blockList">
        <!-- ======== CONSTRUCTOR SUMMARY ======== -->
        <ul class="blockList">
          <li class="blockList"><a name="constructor.summary">
              <!--   -->
            </a>
            <h3>Constructor Summary</h3>
            <table class="memberSummary" border="0" cellpadding="3" cellspacing="0" summary="Constructor Summary table, listing constructors, and an explanation">
              <caption><span>Constructors</span><span class="tabEnd">&nbsp;</span></caption>
              <tr>
                <th class="colOne" scope="col">Constructor and Description</th>
              </tr>
              <tr class="altColor">
                <td class="colOne"><code><span class="memberNameLink"><a href="../../webdev/helpers/Extensions.html#Extensions--">Extensions</a></span>()</code>&nbsp;</td>
              </tr>
            </table>
          </li>
        </ul>
        <!-- ========== METHOD SUMMARY =========== -->
        <ul class="blockList">
          <li class="blockList"><a name="method.summary">
              <!--   -->
            </a>
            <h3>Method Summary</h3>
            <table class="memberSummary" border="0" cellpadding="3" cellspacing="0" summary="Method Summary table, listing methods, and an explanation">
              <caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span
                  id="t1" class="tableTab"><span><a href="javascript:show(1);">Static Methods</a></span><span class="tabEnd">&nbsp;</span></span><span
                  id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption>
              <tr>
                <th class="colFirst" scope="col">Modifier and Type</th>
                <th class="colLast" scope="col">Method and Description</th>
              </tr>
              <tr id="i0" class="altColor">
                <td class="colFirst"><code>static java.math.BigDecimal</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/helpers/Extensions.html#AddCollectionValues-java.util.HashMap-">AddCollectionValues</a></span>(java.util.HashMap&lt;java.lang.String,java.math.BigDecimal&gt;&nbsp;items)</code>&nbsp;</td>
              </tr>
              <tr id="i1" class="rowColor">
                <td class="colFirst"><code>static java.lang.String</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/helpers/Extensions.html#FlattenCollection-java.util.HashMap-">FlattenCollection</a></span>(java.util.HashMap&lt;java.lang.String,java.math.BigDecimal&gt;&nbsp;items)</code>&nbsp;</td>
              </tr>
              <tr id="i2" class="altColor">
                <td class="colFirst"><code>static java.lang.String</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/helpers/Extensions.html#GetString-webdev.payments.MobileMoneyMethod-">GetString</a></span>(<a href="../../webdev/payments/MobileMoneyMethod.html" title="enum in webdev.payments">MobileMoneyMethod</a>&nbsp;method)</code>&nbsp;</td>
              </tr>
              <tr id="i3" class="rowColor">
                <td class="colFirst"><code>static java.util.HashMap&lt;java.lang.String,java.lang.String&gt;</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/helpers/Extensions.html#ParseQueryString-java.lang.String-">ParseQueryString</a></span>(java.lang.String&nbsp;qs)</code>&nbsp;</td>
              </tr>
            </table>
            <ul class="blockList">
              <li class="blockList"><a name="methods.inherited.from.class.java.lang.Object">
                  <!--   -->
                </a>
                <h3>Methods inherited from class&nbsp;java.lang.Object</h3>
                <code>clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait</code></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="details">
    <ul class="blockList">
      <li class="blockList">
        <!-- ========= CONSTRUCTOR DETAIL ======== -->
        <ul class="blockList">
          <li class="blockList"><a name="constructor.detail">
              <!--   -->
            </a>
            <h3>Constructor Detail</h3>
            <a name="Extensions--">
              <!--   -->
            </a>
            <ul class="blockListLast">
              <li class="blockList">
                <h4>Extensions</h4>
                <pre>public&nbsp;Extensions()</pre>
              </li>
            </ul>
          </li>
        </ul>
        <!-- ============ METHOD DETAIL ========== -->
        <ul class="blockList">
          <li class="blockList"><a name="method.detail">
              <!--   -->
            </a>
            <h3>Method Detail</h3>
            <a name="FlattenCollection-java.util.HashMap-">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>FlattenCollection</h4>
                <pre>public static&nbsp;java.lang.String&nbsp;FlattenCollection(java.util.HashMap&lt;java.lang.String,java.math.BigDecimal&gt;&nbsp;items)</pre>
              </li>
            </ul>
            <a name="AddCollectionValues-java.util.HashMap-">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>AddCollectionValues</h4>
                <pre>public static&nbsp;java.math.BigDecimal&nbsp;AddCollectionValues(java.util.HashMap&lt;java.lang.String,java.math.BigDecimal&gt;&nbsp;items)</pre>
              </li>
            </ul>
            <a name="ParseQueryString-java.lang.String-">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>ParseQueryString</h4>
                <pre>public static&nbsp;java.util.HashMap&lt;java.lang.String,java.lang.String&gt;&nbsp;ParseQueryString(java.lang.String&nbsp;qs)</pre>
              </li>
            </ul>
            <a name="GetString-webdev.payments.MobileMoneyMethod-">
              <!--   -->
            </a>
            <ul class="blockListLast">
              <li class="blockList">
                <h4>GetString</h4>
                <pre>public static&nbsp;java.lang.String&nbsp;GetString(<a href="../../webdev/payments/MobileMoneyMethod.html" title="enum in webdev.payments">MobileMoneyMethod</a>&nbsp;method)</pre>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>

<h2>Class: webdev.helpers.Hash</h2>

<div class="contentContainer">
  <ul class="inheritance">
    <li>java.lang.Object</li>
    <li>
      <ul class="inheritance">
        <li>webdev.helpers.Hash</li>
      </ul>
    </li>
  </ul>
  <div class="description">
    <ul class="blockList">
      <li class="blockList">
        <hr>
        <br>
        <pre>public final class <span class="typeNameLabel">Hash</span>
extends java.lang.Object</pre>
      </li>
    </ul>
  </div>
  <div class="summary">
    <ul class="blockList">
      <li class="blockList">
        <!-- ======== CONSTRUCTOR SUMMARY ======== -->
        <ul class="blockList">
          <li class="blockList">
            <a name="constructor.summary">
              <!--   -->
            </a>
            <h3>Constructor Summary</h3>
            <table class="memberSummary" border="0" cellpadding="3" cellspacing="0" summary="Constructor Summary table, listing constructors, and an explanation">
              <caption><span>Constructors</span><span class="tabEnd">&nbsp;</span></caption>
              <tr>
                <th class="colOne" scope="col">Constructor and Description</th>
              </tr>
              <tr class="altColor">
                <td class="colOne"><code><span class="memberNameLink"><a href="../../webdev/helpers/Hash.html#Hash--">Hash</a></span>()</code>&nbsp;</td>
              </tr>
            </table>
          </li>
        </ul>
        <!-- ========== METHOD SUMMARY =========== -->
        <ul class="blockList">
          <li class="blockList">
            <a name="method.summary">
              <!--   -->
            </a>
            <h3>Method Summary</h3>
            <table class="memberSummary" border="0" cellpadding="3" cellspacing="0" summary="Method Summary table, listing methods, and an explanation">
              <caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span
                  id="t1" class="tableTab"><span><a href="javascript:show(1);">Static Methods</a></span><span class="tabEnd">&nbsp;</span></span><span
                  id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption>
              <tr>
                <th class="colFirst" scope="col">Modifier and Type</th>
                <th class="colLast" scope="col">Method and Description</th>
              </tr>
              <tr id="i0" class="altColor">
                <td class="colFirst"><code>static java.lang.String</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/helpers/Hash.html#GenerateHash-java.lang.String-">GenerateHash</a></span>(java.lang.String&nbsp;text)</code>&nbsp;</td>
              </tr>
              <tr id="i1" class="rowColor">
                <td class="colFirst"><code>private static byte[]</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/helpers/Hash.html#GenerateSalt--">GenerateSalt</a></span>()</code>&nbsp;</td>
              </tr>
              <tr id="i2" class="altColor">
                <td class="colFirst"><code>private static java.lang.String</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/helpers/Hash.html#GetStringFromHash-byte:A-">GetStringFromHash</a></span>(byte[]&nbsp;hash)</code>&nbsp;</td>
              </tr>
              <tr id="i3" class="rowColor">
                <td class="colFirst"><code>static java.lang.String</code></td>
                <td class="colLast">
                  <code><span class="memberNameLink"><a href="../../webdev/helpers/Hash.html#Make-java.util.Map-java.lang.String-">Make</a></span>(java.util.Map&lt;java.lang.String,java.lang.String&gt;&nbsp;values,
                                 java.lang.String&nbsp;integrationKey)</code>
                  <div class="block">Hash the values in the given map</div>
                </td>
              </tr>
              <tr id="i4" class="altColor">
                <td class="colFirst"><code>static boolean</code></td>
                <td class="colLast">
                  <code><span class="memberNameLink"><a href="../../webdev/helpers/Hash.html#Verify-java.util.Map-java.lang.String-">Verify</a></span>(java.util.Map&lt;java.lang.String,java.lang.String&gt;&nbsp;data,
                                 java.lang.String&nbsp;integrationKey)</code>
                  <div class="block">Verifies the given hash</div>
                </td>
              </tr>
            </table>
            <ul class="blockList">
              <li class="blockList">
                <a name="methods.inherited.from.class.java.lang.Object">
                  <!--   -->
                </a>
                <h3>Methods inherited from class&nbsp;java.lang.Object</h3>
                <code>clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait</code>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="details">
    <ul class="blockList">
      <li class="blockList">
        <!-- ========= CONSTRUCTOR DETAIL ======== -->
        <ul class="blockList">
          <li class="blockList">
            <a name="constructor.detail">
              <!--   -->
            </a>
            <h3>Constructor Detail</h3>
            <a name="Hash--">
              <!--   -->
            </a>
            <ul class="blockListLast">
              <li class="blockList">
                <h4>Hash</h4>
                <pre>public&nbsp;Hash()</pre>
              </li>
            </ul>
          </li>
        </ul>
        <!-- ============ METHOD DETAIL ========== -->
        <ul class="blockList">
          <li class="blockList">
            <a name="method.detail">
              <!--   -->
            </a>
            <h3>Method Detail</h3>
            <a name="Make-java.util.Map-java.lang.String-">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>Make</h4>
                <pre>public static&nbsp;java.lang.String&nbsp;Make(java.util.Map&lt;java.lang.String,java.lang.String&gt;&nbsp;values,
                                    java.lang.String&nbsp;integrationKey)</pre>
                <div class="block">Hash the values in the given map</div>
                <dl>
                  <dt><span class="paramLabel">Parameters:</span></dt>
                  <dd><code>values</code> - Values to value</dd>
                  <dd><code>integrationKey</code> - Paynow integration key</dd>
                  <dt><span class="returnLabel">Returns:</span></dt>
                </dl>
              </li>
            </ul>
            <a name="GetStringFromHash-byte:A-">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>GetStringFromHash</h4>
                <pre>private static&nbsp;java.lang.String&nbsp;GetStringFromHash(byte[]&nbsp;hash)</pre>
              </li>
            </ul>
            <a name="GenerateSalt--">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>GenerateSalt</h4>
                <pre>private static&nbsp;byte[]&nbsp;GenerateSalt()</pre>
              </li>
            </ul>
            <a name="GenerateHash-java.lang.String-">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>GenerateHash</h4>
                <pre>public static&nbsp;java.lang.String&nbsp;GenerateHash(java.lang.String&nbsp;text)</pre>
              </li>
            </ul>
            <a name="Verify-java.util.Map-java.lang.String-">
              <!--   -->
            </a>
            <ul class="blockListLast">
              <li class="blockList">
                <h4>Verify</h4>
                <pre>public static&nbsp;boolean&nbsp;Verify(java.util.Map&lt;java.lang.String,java.lang.String&gt;&nbsp;data,
                             java.lang.String&nbsp;integrationKey)</pre>
                <div class="block">Verifies the given hash</div>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>

<h2>Class: webdev.http.Client</h2>

<div class="contentContainer">
  <ul class="inheritance">
    <li>java.lang.Object</li>
    <li>
      <ul class="inheritance">
        <li>webdev.http.Client</li>
      </ul>
    </li>
  </ul>
  <div class="description">
    <ul class="blockList">
      <li class="blockList">
        <hr>
        <br>
        <pre>public class <span class="typeNameLabel">Client</span>
extends java.lang.Object</pre>
        <div class="block">Http client</div>
      </li>
    </ul>
  </div>
  <div class="summary">
    <ul class="blockList">
      <li class="blockList">
        <!-- ======== CONSTRUCTOR SUMMARY ======== -->
        <ul class="blockList">
          <li class="blockList"><a name="constructor.summary">
              <!--   -->
            </a>
            <h3>Constructor Summary</h3>
            <table class="memberSummary" border="0" cellpadding="3" cellspacing="0" summary="Constructor Summary table, listing constructors, and an explanation">
              <caption><span>Constructors</span><span class="tabEnd">&nbsp;</span></caption>
              <tr>
                <th class="colOne" scope="col">Constructor and Description</th>
              </tr>
              <tr class="altColor">
                <td class="colOne"><code><span class="memberNameLink"><a href="../../webdev/http/Client.html#Client--">Client</a></span>()</code>&nbsp;</td>
              </tr>
            </table>
          </li>
        </ul>
        <!-- ========== METHOD SUMMARY =========== -->
        <ul class="blockList">
          <li class="blockList"><a name="method.summary">
              <!--   -->
            </a>
            <h3>Method Summary</h3>
            <table class="memberSummary" border="0" cellpadding="3" cellspacing="0" summary="Method Summary table, listing methods, and an explanation">
              <caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span
                  id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span
                  id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption>
              <tr>
                <th class="colFirst" scope="col">Modifier and Type</th>
                <th class="colLast" scope="col">Method and Description</th>
              </tr>
              <tr id="i0" class="altColor">
                <td class="colFirst"><code>java.lang.String</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/http/Client.html#PostAsync-java.lang.String-">PostAsync</a></span>(java.lang.String&nbsp;url)</code>&nbsp;</td>
              </tr>
              <tr id="i1" class="rowColor">
                <td class="colFirst"><code>java.lang.String</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/http/Client.html#PostAsync-java.lang.String-java.util.HashMap-">PostAsync</a></span>(java.lang.String&nbsp;url,
         java.util.HashMap&lt;java.lang.String,java.lang.String&gt;&nbsp;data)</code>&nbsp;</td>
              </tr>
            </table>
            <ul class="blockList">
              <li class="blockList"><a name="methods.inherited.from.class.java.lang.Object">
                  <!--   -->
                </a>
                <h3>Methods inherited from class&nbsp;java.lang.Object</h3>
                <code>clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait</code></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="details">
    <ul class="blockList">
      <li class="blockList">
        <!-- ========= CONSTRUCTOR DETAIL ======== -->
        <ul class="blockList">
          <li class="blockList"><a name="constructor.detail">
              <!--   -->
            </a>
            <h3>Constructor Detail</h3>
            <a name="Client--">
              <!--   -->
            </a>
            <ul class="blockListLast">
              <li class="blockList">
                <h4>Client</h4>
                <pre>public&nbsp;Client()</pre>
              </li>
            </ul>
          </li>
        </ul>
        <!-- ============ METHOD DETAIL ========== -->
        <ul class="blockList">
          <li class="blockList"><a name="method.detail">
              <!--   -->
            </a>
            <h3>Method Detail</h3>
            <a name="PostAsync-java.lang.String-">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>PostAsync</h4>
                <pre>public final&nbsp;java.lang.String&nbsp;PostAsync(java.lang.String&nbsp;url)</pre>
              </li>
            </ul>
            <a name="PostAsync-java.lang.String-java.util.HashMap-">
              <!--   -->
            </a>
            <ul class="blockListLast">
              <li class="blockList">
                <h4>PostAsync</h4>
                <pre>public final&nbsp;java.lang.String&nbsp;PostAsync(java.lang.String&nbsp;url,
                                        java.util.HashMap&lt;java.lang.String,java.lang.String&gt;&nbsp;data)</pre>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>

<h2>Class: webdev.payments.MobileMoneyMethod</h2>

<div class="contentContainer">
  <ul class="inheritance">
    <li>java.lang.Object</li>
    <li>
      <ul class="inheritance">
        <li>java.lang.Enum&lt;<a href="../../webdev/payments/MobileMoneyMethod.html" title="enum in webdev.payments">MobileMoneyMethod</a>&gt;</li>
        <li>
          <ul class="inheritance">
            <li>webdev.payments.MobileMoneyMethod</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
  <div class="description">
    <ul class="blockList">
      <li class="blockList">
        <dl>
          <dt>All Implemented Interfaces:</dt>
          <dd>java.io.Serializable, java.lang.Comparable&lt;<a href="../../webdev/payments/MobileMoneyMethod.html" title="enum in webdev.payments">MobileMoneyMethod</a>&gt;</dd>
        </dl>
        <hr>
        <br>
        <pre>public enum <span class="typeNameLabel">MobileMoneyMethod</span>
extends java.lang.Enum&lt;<a href="../../webdev/payments/MobileMoneyMethod.html" title="enum in webdev.payments">MobileMoneyMethod</a>&gt;</pre>
      </li>
    </ul>
  </div>
  <div class="summary">
    <ul class="blockList">
      <li class="blockList">
        <!-- =========== ENUM CONSTANT SUMMARY =========== -->
        <ul class="blockList">
          <li class="blockList"><a name="enum.constant.summary">
              <!--   -->
            </a>
            <h3>Enum Constant Summary</h3>
            <table class="memberSummary" border="0" cellpadding="3" cellspacing="0" summary="Enum Constant Summary table, listing enum constants, and an explanation">
              <caption><span>Enum Constants</span><span class="tabEnd">&nbsp;</span></caption>
              <tr>
                <th class="colOne" scope="col">Enum Constant and Description</th>
              </tr>
              <tr class="altColor">
                <td class="colOne"><code><span class="memberNameLink"><a href="../../webdev/payments/MobileMoneyMethod.html#Ecocash">Ecocash</a></span></code>&nbsp;</td>
              </tr>
            </table>
          </li>
        </ul>
        <!-- =========== FIELD SUMMARY =========== -->
        <ul class="blockList">
          <li class="blockList"><a name="field.summary">
              <!--   -->
            </a>
            <h3>Field Summary</h3>
            <table class="memberSummary" border="0" cellpadding="3" cellspacing="0" summary="Field Summary table, listing fields, and an explanation">
              <caption><span>Fields</span><span class="tabEnd">&nbsp;</span></caption>
              <tr>
                <th class="colFirst" scope="col">Modifier and Type</th>
                <th class="colLast" scope="col">Field and Description</th>
              </tr>
              <tr class="altColor">
                <td class="colFirst"><code>static int</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/payments/MobileMoneyMethod.html#SIZE">SIZE</a></span></code>&nbsp;</td>
              </tr>
            </table>
          </li>
        </ul>
        <!-- ========== METHOD SUMMARY =========== -->
        <ul class="blockList">
          <li class="blockList"><a name="method.summary">
              <!--   -->
            </a>
            <h3>Method Summary</h3>
            <table class="memberSummary" border="0" cellpadding="3" cellspacing="0" summary="Method Summary table, listing methods, and an explanation">
              <caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span
                  id="t1" class="tableTab"><span><a href="javascript:show(1);">Static Methods</a></span><span class="tabEnd">&nbsp;</span></span><span
                  id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span
                  id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption>
              <tr>
                <th class="colFirst" scope="col">Modifier and Type</th>
                <th class="colLast" scope="col">Method and Description</th>
              </tr>
              <tr id="i0" class="altColor">
                <td class="colFirst"><code>static <a href="../../webdev/payments/MobileMoneyMethod.html" title="enum in webdev.payments">MobileMoneyMethod</a></code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/payments/MobileMoneyMethod.html#forValue-int-">forValue</a></span>(int&nbsp;value)</code>&nbsp;</td>
              </tr>
              <tr id="i1" class="rowColor">
                <td class="colFirst"><code>int</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/payments/MobileMoneyMethod.html#getValue--">getValue</a></span>()</code>&nbsp;</td>
              </tr>
              <tr id="i2" class="altColor">
                <td class="colFirst"><code>static <a href="../../webdev/payments/MobileMoneyMethod.html" title="enum in webdev.payments">MobileMoneyMethod</a></code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/payments/MobileMoneyMethod.html#valueOf-java.lang.String-">valueOf</a></span>(java.lang.String&nbsp;name)</code>
                  <div class="block">Returns the enum constant of this type with the specified name.</div>
                </td>
              </tr>
              <tr id="i3" class="rowColor">
                <td class="colFirst"><code>static <a href="../../webdev/payments/MobileMoneyMethod.html" title="enum in webdev.payments">MobileMoneyMethod</a>[]</code></td>
                <td class="colLast"><code><span class="memberNameLink"><a href="../../webdev/payments/MobileMoneyMethod.html#values--">values</a></span>()</code>
                  <div class="block">Returns an array containing the constants of this enum type, in the order they are declared.
                  </div>
                </td>
              </tr>
            </table>
            <ul class="blockList">
              <li class="blockList"><a name="methods.inherited.from.class.java.lang.Enum">
                  <!--   -->
                </a>
                <h3>Methods inherited from class&nbsp;java.lang.Enum</h3>
                <code>clone, compareTo, equals, finalize, getDeclaringClass, hashCode, name, ordinal, toString, valueOf</code></li>
            </ul>
            <ul class="blockList">
              <li class="blockList"><a name="methods.inherited.from.class.java.lang.Object">
                  <!--   -->
                </a>
                <h3>Methods inherited from class&nbsp;java.lang.Object</h3>
                <code>getClass, notify, notifyAll, wait, wait, wait</code></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="details">
    <ul class="blockList">
      <li class="blockList">
        <!-- ============ ENUM CONSTANT DETAIL =========== -->
        <ul class="blockList">
          <li class="blockList"><a name="enum.constant.detail">
              <!--   -->
            </a>
            <h3>Enum Constant Detail</h3>
            <a name="Ecocash">
              <!--   -->
            </a>
            <ul class="blockListLast">
              <li class="blockList">
                <h4>Ecocash</h4>
                <pre>public static final&nbsp;<a href="../../webdev/payments/MobileMoneyMethod.html" title="enum in webdev.payments">MobileMoneyMethod</a> Ecocash</pre>
              </li>
            </ul>
          </li>
        </ul>
        <!-- ============ FIELD DETAIL =========== -->
        <ul class="blockList">
          <li class="blockList"><a name="field.detail">
              <!--   -->
            </a>
            <h3>Field Detail</h3>
            <a name="SIZE">
              <!--   -->
            </a>
            <ul class="blockListLast">
              <li class="blockList">
                <h4>SIZE</h4>
                <pre>public static final&nbsp;int SIZE</pre>
                <dl>
                  <dt><span class="seeLabel">See Also:</span></dt>
                  <dd><a href="../../constant-values.html#webdev.payments.MobileMoneyMethod.SIZE">Constant Field Values</a></dd>
                </dl>
              </li>
            </ul>
          </li>
        </ul>
        <!-- ============ METHOD DETAIL ========== -->
        <ul class="blockList">
          <li class="blockList"><a name="method.detail">
              <!--   -->
            </a>
            <h3>Method Detail</h3>
            <a name="values--">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>values</h4>
                <pre>public static&nbsp;<a href="../../webdev/payments/MobileMoneyMethod.html" title="enum in webdev.payments">MobileMoneyMethod</a>[]&nbsp;values()</pre>
                <div class="block">Returns an array containing the constants of this enum type, in the order they are declared.
                  This method may be used to iterate over the constants as follows:
                  <pre>
for (MobileMoneyMethod c : MobileMoneyMethod.values())
&nbsp;   System.out.println(c);
</pre>
                </div>
                <dl>
                  <dt><span class="returnLabel">Returns:</span></dt>
                  <dd>an array containing the constants of this enum type, in the order they are declared</dd>
                </dl>
              </li>
            </ul>
            <a name="valueOf-java.lang.String-">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>valueOf</h4>
                <pre>public static&nbsp;<a href="../../webdev/payments/MobileMoneyMethod.html" title="enum in webdev.payments">MobileMoneyMethod</a>&nbsp;valueOf(java.lang.String&nbsp;name)</pre>
                <div class="block">Returns the enum constant of this type with the specified name. The string must match
                  <i>exactly</i> an identifier used to declare an enum constant in this type. (Extraneous whitespace characters
                  are not permitted.)</div>
                <dl>
                  <dt><span class="paramLabel">Parameters:</span></dt>
                  <dd><code>name</code> - the name of the enum constant to be returned.</dd>
                  <dt><span class="returnLabel">Returns:</span></dt>
                  <dd>the enum constant with the specified name</dd>
                  <dt><span class="throwsLabel">Throws:</span></dt>
                  <dd><code>java.lang.IllegalArgumentException</code> - if this enum type has no constant with the specified
                    name
                  </dd>
                  <dd><code>java.lang.NullPointerException</code> - if the argument is null</dd>
                </dl>
              </li>
            </ul>
            <a name="getValue--">
              <!--   -->
            </a>
            <ul class="blockList">
              <li class="blockList">
                <h4>getValue</h4>
                <pre>public&nbsp;int&nbsp;getValue()</pre>
              </li>
            </ul>
            <a name="forValue-int-">
              <!--   -->
            </a>
            <ul class="blockListLast">
              <li class="blockList">
                <h4>forValue</h4>
                <pre>public static&nbsp;<a href="../../webdev/payments/MobileMoneyMethod.html" title="enum in webdev.payments">MobileMoneyMethod</a>&nbsp;forValue(int&nbsp;value)</pre>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>